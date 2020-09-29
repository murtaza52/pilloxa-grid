(ns pilloxa.env
  (:require
    [selmer.parser :as parser]
    [clojure.tools.logging :as log]
    [pilloxa.dev-middleware :refer [wrap-dev]]))

(def defaults
  {:init
   (fn []
     (parser/cache-off!)
     (log/info "\n-=[pilloxa started successfully using the development profile]=-"))
   :stop
   (fn []
     (log/info "\n-=[pilloxa has shut down successfully]=-"))
   :middleware wrap-dev})
