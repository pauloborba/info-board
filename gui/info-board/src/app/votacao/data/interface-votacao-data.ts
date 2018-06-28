import Votacao from '../../model/votacao';
import Usuario from '../../model/votacao';

export interface VoteData {
    data: Date;
    votacao: Votacao;
    user: Usuario;
}

// interface SuggestDate {
//     data: Date;
//     votacao: Votacao;
//     user: Usuario;
// }
