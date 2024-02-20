let games = [
    {id :'1',title : 'abc',platform:['switch1']},
    {id :'2',title : 'def',platform:['switch2']},
    {id :'3',title : 'ghi',platform:['switch3']},
    {id :'4',title : 'jkl',platform:['switch4']},
    {id :'5',title : 'mno',platform:['switch5']},
]
let authors =  [
    {id:'1',name:'fatima',verified:true},
    {id:'2',name:'fatima1',verified:false},
    {id:'3',name:'fatima2',verified:true},
]
let reviews = [
    {id : '1',rating:4,content:'acb',author_id:'1',game_id:'2'},
    {id : '2',rating:7,content:'acb',author_id:'2',game_id:'1'},
    {id : '3',rating:8,content:'acb',author_id:'3',game_id:'3'},
    {id : '4',rating:3,content:'acb',author_id:'4',game_id:'6'},
    {id : '5',rating:8,content:'acb',author_id:'5',game_id:'5'},
    {id : '6',rating:9,content:'acb',author_id:'6',game_id:'4'},
    {id : '7',rating:12,content:'acb',author_id:'7',game_id:'7'},
    {id : '8',rating:2,content:'acb',author_id:'8',game_id:'5'},
]

export default {games,authors,reviews}