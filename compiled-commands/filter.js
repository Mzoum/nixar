// Generated by LiveScript 1.3.1
(function(){
  module.exports = function(repo){
    return repo.commands.push({
      name: "filter",
      desc: "Filter lines",
      input: 'line',
      output: 'line',
      enabled: true,
      doc: {
        examples: ['']
      },
      compile: function(){
        return function(mask, input){
          if ((mask != null ? mask : "") === "") {
            return (input != null ? input : "") === "" ? null : input;
          }
          mask = mask.replace(/\\/g, '\\\\');
          if (input.match(mask)) {
            return input.split(mask).join(mask.yellow);
          } else {
            return null;
          }
        };
      }
    });
  };
}).call(this);
