const mongoose = require('mongoose');
const rp = require('request-promise');

const execGen = (gen, resolve) => {
  let nextVals = gen.next();

  if (nextVals.done) resolve();
  else {
    nextVals.value
      .then(res => {
        gen.next(res);
        execGen(gen, resolve);
      })
      .catch(err => console.log(err));
  }
}

describe('Voting System', () => {
  var dbConnection
    , dbUrl = 'http://localhost:5000'
    , users;

  beforeAll(done => {
    // Start up database
    dbConnection = mongoose.createConnection('mongodb://localhost:27017');
    dbConnection.on('error', () => console.log('Error connecting to database'));
    dbConnection.on('connect', done);
  });

  afterAll(() => {
    dbConnection.disconnect();
  });

  beforeEach(done => {
    // Populating database
    let options = [
      {
        method: 'POST',
        uri: dbUrl + '/api/user',
        body: {
          firstName: 'Gabriel',
          lastName: 'Barbosa',
          email: 'gb@',
          password: 'gb',
          admin: false
        },
        json: true
      },
      {
        method: 'POST',
        uri: dbUrl + '/api/user',
        body: {
          firstName: 'Nara',
          lastName: 'Souza',
          email: 'ns@',
          password: 'ns',
          admin: false
        },
        json: true
      },
      {
        method: 'POST',
        uri: dbUrl + '/api/user',
        body: {
          firstName: 'Pedro',
          lastName: 'Henrique',
          email: 'ph@',
          password: 'ph',
          admin: false
        },
        json: true
      }
    ]

    let count = 0;

    for (let option of options) {
      rp(option)
        .then(res => {
          count++;
          users.push(res);
          if (count === users.length) done();
        })
        .catch(err => console.log(err));
    }
  });

  afterEach(done => {
    // Clear database
    users = [];
    dbConnection.db.dropDatabase(done);
  });

  it('registers votes correctly', done => {
    let voterId = users[0]._id,
      votedId = users[1]._id;

    let options = {
      method: 'POST',
      uri: dbUrl + 'election/vote/' + voterId + '/' + votedId + '/register',
      json: true
    }

    rp(options)
      .then(res => {
        expect(res.voterId === voterId && res.votedId === votedId).toBeTruthy();
        done();
      })
      .catch(err => console.log(err));
  });

  it('modifies votes correctly', done => {
    let voterId = users[0]._id,
      votedId = users[1]._id;

    let options = {
      method: 'POST',
      uri: dbUrl + '/election/vote/' + voterId + '/' + votedId + '/register',
      json: true
    }

    let checkNewVote = _ => {
      options.method = 'GET';
      options.uri = dbUrl + '/election/voter/' + voterId + '/vote';

      rp(options)
        .then(newVote => {
          expect(newVote.voterId === voterId && newVote.votedId === votedId).toBeTruthy();
          done();
        })
        .catch(err => console.log(err));
    }

    let changeVote = _ => {
      votedId = users[2]._id;

      options.uri = dbUrl + '/election/vote/' + voterId + '/' + votedId + '/register';

      rp(options)
        .then(checkNewVote)
        .catch(err => console.log(err));
    }

    rp(options)
      .then(changeVote)
      .catch(err => console.log(err));
  });

  it('returns all votes correctly upon request', done => {

    function* testAllVotes() {
      let allVotes = [];
      
      let options = {
        method: 'POST',
        json: true
      }

      for(let i = 0;i < users.length;i++) {
        // Populating database with votes
        let voterId = users[i]._id;
        let votedId = users[(i + 1) % users.length]._id;

        options.uri = dbUrl + '/election/vote/' + voterId + '/' + votedId + '/register';

        let nextVote = yield rp(options);
        allVotes.push(nextVote);
      }

      options.method = 'GET';
      options.uri = dbUrl + '/election/votes';

      let allReturnedVotes = yield rp(options);

      let returnedCorrectly = true;
      for(let i = 0;i < allVotes.length;i++) {
        // Verify if a matching vote can be found for every inserted vote
        returnedCorrectly = returnedCorrectly
          && allReturnedVotes.find(vote => vote._id.equals(allVotes[i]._id));
      }

      expect(returnedCorrectly).toBeTruthy();
    }

    execGen(testAllVotes(), done);
  });
});
