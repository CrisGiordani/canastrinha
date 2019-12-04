/*

CREATE {
    id_game: id_game,
    round: int (get last, add one),
    id_player: id_player,
    score: int,
    created_at: timestamp
}
if (round já existe) { delete and create - do not update }

UPDATE (all / 4 registers) {
    score: int
} where {
    id_game: id_game,
    round: int,
    id_player: id_player
}

DELETE (all / 4 registers) {
    *
} where {
    id_game: id_game,
    round: int
}

*/
