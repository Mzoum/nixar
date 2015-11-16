module.exports = function(repo) {
  repo.docs.push({
    "name": "nixar",
    "files": [
      "<p>Command\n<code>sh\n$ help\n</code></p>",
      "<h3>Print a list of commands nixar</h3>\n\n<p>Command\n<code>sh\n$ nixar\n</code></p>\n\n<p>Output\n```sh\n<span class=\"nixar\">after  </span> Print everything after mask\n<span class=\"nixar\">before </span> Print everything before mask\n<span class=\"nixar\">col    </span> Get specific columns\n<span class=\"nixar\">concat </span> Join lines into one line\n<span class=\"nixar\">count  </span> Calculate count of lines\n<span class=\"nixar\">drop   </span> Drop lines\n<span class=\"nixar\">exclude</span> Exclude line by founded mask\n<span class=\"nixar\">file   </span> Print file, file lines, file created, file modified\n<span class=\"nixar\">filter </span> Filter lines\n<span class=\"nixar\">fs     </span> Find by mask <em>.</em> or <em>*/</em>.* or */ or all\n<span class=\"nixar\">length </span> Calculate count of charecters\n<span class=\"nixar\">log    </span> Log output into file and continue printing\n<span class=\"nixar\">lower  </span> make lowercase\n<span class=\"nixar\">map    </span> Transform line\n<span class=\"nixar\">mark   </span> Highlight the mask into lines\n<span class=\"nixar\">nixar  </span> Show all commands\n<span class=\"nixar\">order  </span> Sort lines\n<span class=\"nixar\">remove </span> Remove substring in line\n<span class=\"nixar\">replace</span> Replace substring in line\n<span class=\"nixar\">reverse</span> Reverse the order of output\n<span class=\"nixar\">row    </span> Get specific row\n<span class=\"nixar\">show   </span> Show content and send to next program\n<span class=\"nixar\">split  </span> Split line into lines\n<span class=\"nixar\">substr </span> Substring operation\n<span class=\"nixar\">table  </span> Create columns from line based on separator\n<span class=\"nixar\">take   </span> Take lines\n<span class=\"nixar\">trim   </span> Remove spaces from start and end of line\n<span class=\"nixar\">turn   </span> Calculate minimum integer\n<span class=\"nixar\">uniq   </span> Get unique records\n<span class=\"nixar\">upper  </span> MAKE UPPERCASE</p>\n\n<p>```</p>"
    ]
  });
}