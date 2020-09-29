(ns pilloxa.env
  (:require [clojure.tools.logging :as log]))

(def defaults
  {:init
   (fn []
     (log/info "\n-=[pilloxa started successfully]=-"))
   :stop
   (fn []
     (log/info "\n-=[pilloxa has shut down successfully]=-"))
   :middleware identity})
