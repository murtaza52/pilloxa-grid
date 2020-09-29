(ns pilloxa.doo-runner
  (:require [doo.runner :refer-macros [doo-tests]]
            [pilloxa.core-test]))

(doo-tests 'pilloxa.core-test)

