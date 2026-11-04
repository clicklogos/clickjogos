(()=>{
  const forbidden=["arrombada","arrombado","asshole","bitch","boceta","buceta","caralho","chink","ching chong","crioula","crioulo","cuzão","desgraçada","desgraçado","foda","foda-se","fodida","fodido","foder","fuck","fucker","heil hitler","kike","macaca","macaco","merda","nigga","nigger","piranha","pinto","puta","putinha","putinho","puto","rola","shit","spic","vagabunda","vagabundo","white power","filha da puta","filho da puta"];
  const substitutions={"0":"o","1":"i","3":"e","4":"a","5":"s","7":"t","@":"a","$":"s"};
  function normalize(value){return String(value??"").normalize("NFKD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[0-9]+$/g,"").replace(/[013457@$]/g,char=>substitutions[char]||char)}
  function isBlocked(value){const normalized=normalize(value);return forbidden.some(term=>{const letters=normalize(term).replace(/[^a-z0-9]/g,"");if(!letters)return false;const pattern=letters.split("").join("[^a-z0-9]*");return new RegExp("(^|[^a-z])"+pattern+"($|[^a-z])").test(normalized)})}
  function validate(value){const clean=String(value??"").trim().slice(0,18);return {ok:!isBlocked(clean),value:clean}}
  window.ClicklogosNameFilter={validate};
})();
