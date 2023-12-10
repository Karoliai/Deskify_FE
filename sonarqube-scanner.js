import scanner from "sonarqube-scanner"
scanner(
    {
        serverUrl: "http://localhost:9000",
        login: "admin",
        password: "admin1",
        token:"sqp_9f120f28445baa8d8788716c3d70199e9275b39a",
        options: {
            "sonar.sources": "./src",
        },
    },
    () => process.exit()
);
