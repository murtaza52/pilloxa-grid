(ns pilloxa.grid
  (:require [clojure.set :as cset]))

(defn calculate-coordinates
  [[x1 y1] [x2 y2]]
  (for [x (range x1 (inc x2)) y (range y1 (inc y2))]
    [x y]))

(comment
  (calculate-coordinates [0 0] [2 2]))

(defn toggle
  [all-coordinates to-toggle]
  (let [to-deactivate (cset/intersection all-coordinates to-toggle)
        to-activate   (cset/difference to-toggle to-deactivate)]
    (cset/union (cset/difference all-coordinates to-deactivate) to-activate)))

(comment
  (toggle #{1 2} #{2 3}))

(defn apply-command
  ([{:keys [command coordinates]}]
   (apply-command #{} coordinates))
  ([all-coordinates {:keys [command coordinates]}]
   (case command
     :activate   (cset/union all-coordinates coordinates)
     :deactivate (cset/difference all-coordinates coordinates)
     :toggle     (toggle all-coordinates coordinates)
     (prn command))))

(comment
  (apply-command #{1 2 3} {:command :toggle :coordinates #{2 4}})
  (apply-command #{1 2 3} {:command :activate :coordinates #{2 4}})
  (apply-command #{1 2 3} {:command :deactivate :coordinates #{2 4}}))

(defn add-coordinates
  [{:keys [from to] :as m}]
  (assoc m :coordinates (set (calculate-coordinates from to))))

(defn calculate-active-coordinates
  [commands]
  (->> commands
       (map add-coordinates)
       (reduce apply-command #{})))

(def get-active-coordinates (memoize calculate-active-coordinates))

(def get-active-coordinate-count (memoize (comp count get-active-coordinates)))

(comment
  (clojure.set/difference #{1 2 3} #{ 3 4 5})
  (clojure.set/union #{1 2 3} #{ 3 4 5})
  (take 2 (get-active-coordinates (pilloxa.io/get-data pilloxa.io/input-file)))
  (get-active-coordinate-count (pilloxa.io/get-data pilloxa.io/input-file)))


(comment
  (def xprocess-input
    (comp
      (map line->map)
      (map add-coordinates)))

  ;; (count (transduce xprocess-input apply-command #{} (read-data input-file)))

 ;; (reduce apply-command #{} [{:command :toggle :coordinates #{2 4}}])
)
