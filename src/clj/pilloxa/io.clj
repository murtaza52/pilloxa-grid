(ns pilloxa.io
  (:require [clojure.java.io :as io]
            [clojure.string :as cs]))

(def input-file "resources/input-data.txt")

(defn str->coordinate
  [v]
  (let [[x y] (cs/split v #",")]
    [(Integer/parseInt x) (Integer/parseInt y)]))

(comment
  (str->coordinate "36,293"))

(defn line->map
  [line]
  (let [[command from _ to] (cs/split line #" ")]
    {:command (keyword command)
     :from    (str->coordinate from)
     :to      (str->coordinate to)}))

(comment
  (line->map "toggle 508,84 to 545,462"))

(defn read-data
  [file-path]
  (with-open [rdr (io/reader file-path)]
    (mapv line->map (line-seq rdr))))

(def get-data (memoize read-data))

(comment
  (get-data input-file))

(comment
  (def v2 (let [polygon (Polygon.)]
            (. polygon addPoint 0 0)
            (. polygon addPoint 0 2)
            (. polygon addPoint 2 2)
            (. polygon addPoint 2 0)
            polygon))

  (. v2 getBoundingBox)
  (. v2 contains (java.awt.Point. 1 2)))
