/*
Language: Extended Backus-Naur Form
Author: imaoki <https://github.com/imaoki>
*/

var hljslang = hljslang || {};
hljslang.ebnf = function(hljs) {
  var ebnfIdentifier = {
    className: 'keyword',
    begin: /[a-zA-Z][a-zA-Z0-9_-]*/
  };

  var ebnfString = {
    className: 'string',
    begin: /".*?"/
  };

  var ebnfSingleQuotString = {
    className: 'string',
    begin: /'.*?'/
  };

  var ebnfComment = {
    className: 'comment',
    begin: /\(\*/, end: /\*\)/
  };

  var ebnfSpecialSequence = {
    className: 'meta',
    begin: /\?[^\?]+?\?/
  };

  var ebnfTermination = {
    className: 'title',
    begin: /;$/
  };

  return {
    case_insensitive: true,
    contains: [
      ebnfIdentifier,
      ebnfString,
      ebnfSingleQuotString,
      ebnfComment,
      ebnfSpecialSequence,
      ebnfTermination
    ]
  };
};
