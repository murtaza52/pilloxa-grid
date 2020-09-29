(ns pilloxa.core
  (:require [ajax.core :refer [GET]]
            [quil.core :as q]
            [clojure.core :as cc]
            [cljs.reader :refer [read-string]]
            [pilloxa.grid :as pg]))

;;;; Utility fns ;;;;
(defn log
  [v]
  (.log js/console v))

(defn deserialize-response
  [body]
  (js->clj (read-string body)))


;;; Configuration ;;;;
(def grid-config
  {:size-x         700
   :size-y         700
   :inactive-color 0
   :active-color   255})

;;; Quil Grid ;;;;

(defn setup
  []
  (q/background (:inactive-color grid-config))
  (q/stroke-weight 1)
  (q/stroke (:active-color grid-config)))

(defn draw [coordinates]
  (doseq [[x y] coordinates]
    (q/point x y)))

(defn sketch-grid [state]
  (q/sketch
    :setup setup
    :host "grid-canvas"
    :size [(:size-x grid-config) (:size-y grid-config)]
    :draw #(draw state)))

(defn coordinates-handler [active-coordinates]
  (sketch-grid active-coordinates))

(defn input-commands-handler
  [input-commands]
  (-> input-commands
      pg/get-active-coordinates
      sketch-grid))

(defn get-coordinates
  []
  (GET "/activated-coordinates" {:handler coordinates-handler :response-format :transit}))

(defn get-commands
  []
  (GET "/input-commands" {:handler input-commands-handler :response-format :transit}))

(defn init! []
  #_(get-coordinates)
  (get-commands))
