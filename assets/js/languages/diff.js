/*
Language: Diff
Author: imaoki <https://github.com/imaoki>
Description: Supports normal, context and unified format.
Category: common
*/

var hljslang = hljslang || {};
hljslang.diff = function(hljs) {
  var diffRange = {
    className: 'meta',
    relevance: 10,
    variants: [
      {begin: /^[ \t]*@{2}[ \t]+-\d+(,\d+)?[ \t]+\+\d+(,\d+)?[ \t]+@{2}/},
      {begin: /^[ \t]*[\*-]{3}[ \t]+\d+,\d+[ \t]+[\*-]{4}/},
      {begin: /^[ \t]*(\d+,)?\d+[acd]\d+(,\d+)?/}
    ]
  };

  var diffComment = {
    className: 'comment',
    variants: [
      {begin: /^[ \t]*[\*\-\+]{3}.*$/},
      {begin: /^[ \t]*\\.*$/}
    ]
  };

  var diffDeletion = {
    className: 'deletion',
    begin: /^[ \t]*[-<].*$/
  };

  var diffAddition = {
    className: 'addition',
    begin: /^[ \t]*[\+>].*$/
  };

  var diffChange = {
    className: 'addition',
    begin: /^[ \t]*!.*$/
  };

  return {
    case_insensitive: true,
    aliases: ['patch'],
    contains: [
      diffRange,
      diffComment,
      diffDeletion,
      diffAddition,
      diffChange
    ]
  };
};
