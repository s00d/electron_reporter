module.exports = {
    apps: [
        {
            name: "simsale-electron-reporter-server",
            script: "npm",
            args: "start",
            max_memory_restart: "128M",
            instances: 1,
            exec_mode: "cluster",
            watch: false,
            merge_logs: true,
            out_file: "./out.log",
            error_file: "./error.log",
            log_date_format: "YYY-MM-DD HH:mm:ss.SSS"
        }
    ]
};
