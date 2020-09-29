FROM openjdk:8-alpine

COPY target/uberjar/pilloxa.jar /pilloxa/app.jar

EXPOSE 3000

CMD ["java", "-jar", "/pilloxa/app.jar"]
