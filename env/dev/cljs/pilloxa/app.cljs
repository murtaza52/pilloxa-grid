(ns^:figwheel-no-load pilloxa.app
  (:require
    [pilloxa.core :as core]
    [cljs.spec.alpha :as s]
    [expound.alpha :as expound]
    [devtools.core :as devtools]
    [clojure.browser.repl :as repl]))

(extend-protocol IPrintWithWriter
  js/Symbol
  (-pr-writer [sym writer _]
    (-write writer (str "\"" (.toString sym) "\""))))

(set! s/*explain-out* expound/printer)

(enable-console-print!)

(devtools/install!)

(core/init!)

;; (repl/connect "http://localhost:9000/repl")
