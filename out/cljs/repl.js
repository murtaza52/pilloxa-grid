// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35223){
var map__35224 = p__35223;
var map__35224__$1 = (((((!((map__35224 == null))))?(((((map__35224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35224.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35224):map__35224);
var m = map__35224__$1;
var n = cljs.core.get.call(null,map__35224__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__35224__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35226_35258 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35227_35259 = null;
var count__35228_35260 = (0);
var i__35229_35261 = (0);
while(true){
if((i__35229_35261 < count__35228_35260)){
var f_35262 = cljs.core._nth.call(null,chunk__35227_35259,i__35229_35261);
cljs.core.println.call(null,"  ",f_35262);


var G__35263 = seq__35226_35258;
var G__35264 = chunk__35227_35259;
var G__35265 = count__35228_35260;
var G__35266 = (i__35229_35261 + (1));
seq__35226_35258 = G__35263;
chunk__35227_35259 = G__35264;
count__35228_35260 = G__35265;
i__35229_35261 = G__35266;
continue;
} else {
var temp__5735__auto___35267 = cljs.core.seq.call(null,seq__35226_35258);
if(temp__5735__auto___35267){
var seq__35226_35268__$1 = temp__5735__auto___35267;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35226_35268__$1)){
var c__4556__auto___35269 = cljs.core.chunk_first.call(null,seq__35226_35268__$1);
var G__35270 = cljs.core.chunk_rest.call(null,seq__35226_35268__$1);
var G__35271 = c__4556__auto___35269;
var G__35272 = cljs.core.count.call(null,c__4556__auto___35269);
var G__35273 = (0);
seq__35226_35258 = G__35270;
chunk__35227_35259 = G__35271;
count__35228_35260 = G__35272;
i__35229_35261 = G__35273;
continue;
} else {
var f_35274 = cljs.core.first.call(null,seq__35226_35268__$1);
cljs.core.println.call(null,"  ",f_35274);


var G__35275 = cljs.core.next.call(null,seq__35226_35268__$1);
var G__35276 = null;
var G__35277 = (0);
var G__35278 = (0);
seq__35226_35258 = G__35275;
chunk__35227_35259 = G__35276;
count__35228_35260 = G__35277;
i__35229_35261 = G__35278;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35279 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_35279);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_35279)))?cljs.core.second.call(null,arglists_35279):arglists_35279));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35230_35280 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35231_35281 = null;
var count__35232_35282 = (0);
var i__35233_35283 = (0);
while(true){
if((i__35233_35283 < count__35232_35282)){
var vec__35244_35284 = cljs.core._nth.call(null,chunk__35231_35281,i__35233_35283);
var name_35285 = cljs.core.nth.call(null,vec__35244_35284,(0),null);
var map__35247_35286 = cljs.core.nth.call(null,vec__35244_35284,(1),null);
var map__35247_35287__$1 = (((((!((map__35247_35286 == null))))?(((((map__35247_35286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35247_35286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35247_35286):map__35247_35286);
var doc_35288 = cljs.core.get.call(null,map__35247_35287__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35289 = cljs.core.get.call(null,map__35247_35287__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35285);

cljs.core.println.call(null," ",arglists_35289);

if(cljs.core.truth_(doc_35288)){
cljs.core.println.call(null," ",doc_35288);
} else {
}


var G__35290 = seq__35230_35280;
var G__35291 = chunk__35231_35281;
var G__35292 = count__35232_35282;
var G__35293 = (i__35233_35283 + (1));
seq__35230_35280 = G__35290;
chunk__35231_35281 = G__35291;
count__35232_35282 = G__35292;
i__35233_35283 = G__35293;
continue;
} else {
var temp__5735__auto___35294 = cljs.core.seq.call(null,seq__35230_35280);
if(temp__5735__auto___35294){
var seq__35230_35295__$1 = temp__5735__auto___35294;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35230_35295__$1)){
var c__4556__auto___35296 = cljs.core.chunk_first.call(null,seq__35230_35295__$1);
var G__35297 = cljs.core.chunk_rest.call(null,seq__35230_35295__$1);
var G__35298 = c__4556__auto___35296;
var G__35299 = cljs.core.count.call(null,c__4556__auto___35296);
var G__35300 = (0);
seq__35230_35280 = G__35297;
chunk__35231_35281 = G__35298;
count__35232_35282 = G__35299;
i__35233_35283 = G__35300;
continue;
} else {
var vec__35249_35301 = cljs.core.first.call(null,seq__35230_35295__$1);
var name_35302 = cljs.core.nth.call(null,vec__35249_35301,(0),null);
var map__35252_35303 = cljs.core.nth.call(null,vec__35249_35301,(1),null);
var map__35252_35304__$1 = (((((!((map__35252_35303 == null))))?(((((map__35252_35303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35252_35303.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35252_35303):map__35252_35303);
var doc_35305 = cljs.core.get.call(null,map__35252_35304__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35306 = cljs.core.get.call(null,map__35252_35304__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35302);

cljs.core.println.call(null," ",arglists_35306);

if(cljs.core.truth_(doc_35305)){
cljs.core.println.call(null," ",doc_35305);
} else {
}


var G__35307 = cljs.core.next.call(null,seq__35230_35295__$1);
var G__35308 = null;
var G__35309 = (0);
var G__35310 = (0);
seq__35230_35280 = G__35307;
chunk__35231_35281 = G__35308;
count__35232_35282 = G__35309;
i__35233_35283 = G__35310;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.call(null,"Spec");

var seq__35254 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35255 = null;
var count__35256 = (0);
var i__35257 = (0);
while(true){
if((i__35257 < count__35256)){
var role = cljs.core._nth.call(null,chunk__35255,i__35257);
var temp__5735__auto___35311__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___35311__$1)){
var spec_35312 = temp__5735__auto___35311__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_35312));
} else {
}


var G__35313 = seq__35254;
var G__35314 = chunk__35255;
var G__35315 = count__35256;
var G__35316 = (i__35257 + (1));
seq__35254 = G__35313;
chunk__35255 = G__35314;
count__35256 = G__35315;
i__35257 = G__35316;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__35254);
if(temp__5735__auto____$1){
var seq__35254__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35254__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__35254__$1);
var G__35317 = cljs.core.chunk_rest.call(null,seq__35254__$1);
var G__35318 = c__4556__auto__;
var G__35319 = cljs.core.count.call(null,c__4556__auto__);
var G__35320 = (0);
seq__35254 = G__35317;
chunk__35255 = G__35318;
count__35256 = G__35319;
i__35257 = G__35320;
continue;
} else {
var role = cljs.core.first.call(null,seq__35254__$1);
var temp__5735__auto___35321__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___35321__$2)){
var spec_35322 = temp__5735__auto___35321__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_35322));
} else {
}


var G__35323 = cljs.core.next.call(null,seq__35254__$1);
var G__35324 = null;
var G__35325 = (0);
var G__35326 = (0);
seq__35254 = G__35323;
chunk__35255 = G__35324;
count__35256 = G__35325;
i__35257 = G__35326;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__35327 = cljs.core.conj.call(null,via,t);
var G__35328 = cljs.core.ex_cause.call(null,t);
via = G__35327;
t = G__35328;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__35331 = datafied_throwable;
var map__35331__$1 = (((((!((map__35331 == null))))?(((((map__35331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35331.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35331):map__35331);
var via = cljs.core.get.call(null,map__35331__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__35331__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__35331__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__35332 = cljs.core.last.call(null,via);
var map__35332__$1 = (((((!((map__35332 == null))))?(((((map__35332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35332.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35332):map__35332);
var type = cljs.core.get.call(null,map__35332__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__35332__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__35332__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__35333 = data;
var map__35333__$1 = (((((!((map__35333 == null))))?(((((map__35333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35333.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35333):map__35333);
var problems = cljs.core.get.call(null,map__35333__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__35333__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__35333__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__35334 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__35334__$1 = (((((!((map__35334 == null))))?(((((map__35334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35334.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35334):map__35334);
var top_data = map__35334__$1;
var source = cljs.core.get.call(null,map__35334__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__35339 = phase;
var G__35339__$1 = (((G__35339 instanceof cljs.core.Keyword))?G__35339.fqn:null);
switch (G__35339__$1) {
case "read-source":
var map__35340 = data;
var map__35340__$1 = (((((!((map__35340 == null))))?(((((map__35340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35340.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35340):map__35340);
var line = cljs.core.get.call(null,map__35340__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__35340__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__35342 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__35342__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__35342,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35342);
var G__35342__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__35342__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35342__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__35342__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35342__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__35343 = top_data;
var G__35343__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__35343,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35343);
var G__35343__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__35343__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35343__$1);
var G__35343__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__35343__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35343__$2);
var G__35343__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__35343__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35343__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__35343__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35343__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__35344 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__35344,(0),null);
var method = cljs.core.nth.call(null,vec__35344,(1),null);
var file = cljs.core.nth.call(null,vec__35344,(2),null);
var line = cljs.core.nth.call(null,vec__35344,(3),null);
var G__35347 = top_data;
var G__35347__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__35347,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__35347);
var G__35347__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__35347__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__35347__$1);
var G__35347__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__35347__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__35347__$2);
var G__35347__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__35347__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35347__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__35347__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35347__$4;
}

break;
case "execution":
var vec__35348 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__35348,(0),null);
var method = cljs.core.nth.call(null,vec__35348,(1),null);
var file = cljs.core.nth.call(null,vec__35348,(2),null);
var line = cljs.core.nth.call(null,vec__35348,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__35330_SHARP_){
var or__4126__auto__ = (p1__35330_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__35330_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__35351 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__35351__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__35351,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__35351);
var G__35351__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__35351__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35351__$1);
var G__35351__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.call(null,G__35351__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__35351__$2);
var G__35351__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__35351__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__35351__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__35351__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35351__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35339__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__35355){
var map__35356 = p__35355;
var map__35356__$1 = (((((!((map__35356 == null))))?(((((map__35356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35356.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35356):map__35356);
var triage_data = map__35356__$1;
var phase = cljs.core.get.call(null,map__35356__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__35356__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__35356__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__35356__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__35356__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__35356__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__35356__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__35356__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__35358 = phase;
var G__35358__$1 = (((G__35358 instanceof cljs.core.Keyword))?G__35358.fqn:null);
switch (G__35358__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35359_35368 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35360_35369 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35361_35370 = true;
var _STAR_print_fn_STAR__temp_val__35362_35371 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35361_35370);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35362_35371);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__35353_SHARP_){
return cljs.core.dissoc.call(null,p1__35353_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35360_35369);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35359_35368);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35363_35372 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35364_35373 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35365_35374 = true;
var _STAR_print_fn_STAR__temp_val__35366_35375 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35365_35374);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35366_35375);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__35354_SHARP_){
return cljs.core.dissoc.call(null,p1__35354_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35364_35373);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35363_35372);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35358__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
