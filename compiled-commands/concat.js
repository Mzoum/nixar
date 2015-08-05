// Generated by LiveScript 1.3.1
(function(){
  module.exports = function(repo){
    return repo.commands.push({
      name: "concat",
      desc: "Concatenate lines into single line",
      input: 'lines',
      output: 'line',
      enabled: true,
      compile: function(){
        return function(mask, lines){
          return lines.join(mask);
        };
      }
    });
  };
}).call(this);