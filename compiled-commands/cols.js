// Generated by LiveScript 1.3.1
(function(){
  module.exports = function(repo, p, parser){
    return repo.commands.push({
      name: 'cols',
      desc: "Get specific columns. Example: `cols 1-3 5 6 9-20`",
      input: 'lines',
      output: 'lines',
      enabled: true,
      doc: {
        examples: ['']
      },
      compile: function(){
        return function(mask, lines){
          var pad, state, eachItem, makeColumns;
          pad = function(str, len){
            return ((str === '' ? ' ' : str) + Array(len).join(' ')).slice(0, len);
          };
          state = {
            maxes: [],
            columns: []
          };
          eachItem = function(s){
            return s.forEach(function(_, i){
              var ref$;
              return state.maxes[i] = Math.max(s[i].length, (ref$ = state.maxes[i]) != null ? ref$ : 0);
            });
          };
          makeColumns = function(it){
            state.columns = parser.numbers(mask, state.maxes.length - 1);
            return it;
          };
          return p.map(function(it){
            return it.map(function(item, c){
              return pad(item, state.maxes[c]);
            }).filter(function(item, i){
              return state.columns.indexOf(i) > -1;
            }).join(' ');
          })(
          makeColumns(
          p.each(eachItem)(
          p.map(function(it){
            return it.split(/[ ]+/);
          })(
          lines))));
        };
      }
    });
  };
}).call(this);
