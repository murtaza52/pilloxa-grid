(ns pilloxa.routes.home
  (:require
    [pilloxa.layout :as layout]
    [clojure.java.io :as io]
    [pilloxa.middleware :as middleware]
    [ring.util.response]
    [ring.util.json-response :as jr]
    [ring.util.http-response :as response]
    [pilloxa.grid :as pg]
    [pilloxa.io :as pi]
    [muuntaja.core :as m]))

(defn home-page [request]
  (layout/render request "home.html"))

(def encoder (m/create))

(defn transit-response
  [body]
  (-> (m/encode encoder "application/transit+json" body)
      response/ok
      (response/header "Content-Type" "application/transit+json")))

(comment
  (transit-response {:a 1 :b 2})
  (jr/json-response {:a 1}))

(defn get-active-coordinates
  [_]
  (-> pi/input-file
      pi/get-data
      pg/get-active-coordinates
      transit-response))

(comment
  (get-active-coordinates {}))

(defn get-input-commands
  [_]
  (-> pi/input-file
      pi/get-data
      transit-response))

(comment
  (get-input-commands {}))

(defn home-routes []
  [""
   {:middleware [middleware/wrap-csrf
                 middleware/wrap-formats]}
   ["/" {:get home-page}]
   ["/activated-coordinates" {:get get-active-coordinates}]
   ["/input-commands" {:get get-input-commands}]])
