import jQuery from "../core.js";

import "../selector.js";
import "../effects.js";
//animador
jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};
