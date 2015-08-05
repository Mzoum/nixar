// Generated by LiveScript 1.3.1
(function(){
  module.exports = function(repo, p){
    return repo.commands.push({
      name: "take",
      desc: "Get specific count of lines",
      input: 'lines',
      output: 'lines',
      enabled: true,
      compile: function(){
        return function(mask, lines){
          return p.take(mask)(
          lines);
        };
      }
    });
  };
}).call(this);