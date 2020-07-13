export default {
  "goverage-test-crud/cmd/crud/main.go": {
    "full-name": "goverage-test-crud/cmd/crud/main.go",
    lines: [
      {
        line: 1,
        contents: [
          {
            tracked: false,
            count: 0,
            content: "package main",
          },
        ],
      },
      {
        line: 2,
        contents: [
          {
            tracked: false,
            count: 0,
            content: "",
          },
        ],
      },
      {
        line: 3,
        contents: [
          {
            tracked: false,
            count: 0,
            content: "import (",
          },
        ],
      },
      {
        line: 4,
        contents: [
          {
            tracked: false,
            count: 0,
            content: '\t"context"',
          },
        ],
      },
      {
        line: 5,
        contents: [
          {
            tracked: false,
            count: 0,
            content: '\t"database/sql"',
          },
        ],
      },
      {
        line: 6,
        contents: [{ tracked: false, count: 0, content: '\t"net/http"' }],
      },
      {
        line: 7,
        contents: [{ tracked: false, count: 0, content: '\t"os"' }],
      },
      {
        line: 8,
        contents: [{ tracked: false, count: 0, content: '\t"os/signal"' }],
      },
      {
        line: 9,
        contents: [{ tracked: false, count: 0, content: '\t"syscall"' }],
      },
      {
        line: 10,
        contents: [{ tracked: false, count: 0, content: '\t"time"' }],
      },
      { line: 11, contents: [{ tracked: false, count: 0, content: "" }] },
      {
        line: 12,
        contents: [
          {
            tracked: false,
            count: 0,
            content: '\t"goverage-test-crud/internal/pkg/api/routers"',
          },
        ],
      },
      {
        line: 13,
        contents: [
          {
            tracked: false,
            count: 0,
            content: '\t"goverage-test-crud/pkg/database"',
          },
        ],
      },
      { line: 14, contents: [{ tracked: false, count: 0, content: "" }] },
      {
        line: 15,
        contents: [
          {
            tracked: false,
            count: 0,
            content: '\t_ "github.com/mattn/go-sqlite3"',
          },
        ],
      },
      {
        line: 16,
        contents: [
          {
            tracked: false,
            count: 0,
            content: '\tlog "github.com/sirupsen/logrus"',
          },
        ],
      },
      { line: 17, contents: [{ tracked: false, count: 0, content: ")" }] },
      { line: 18, contents: [{ tracked: false, count: 0, content: "" }] },
      {
        line: 19,
        contents: [
          {
            tracked: false,
            count: 0,
            content: 'var dbConn string = "./database.db"',
          },
        ],
      },
      {
        line: 20,
        contents: [
          {
            tracked: false,
            count: 0,
            content: 'var dbDriver string = "sqlite3"',
          },
        ],
      },
      {
        line: 21,
        contents: [
          {
            tracked: false,
            count: 0,
            content: 'var apiPort string = "8080"',
          },
        ],
      },
      { line: 22, contents: [{ tracked: false, count: 0, content: "" }] },
      {
        line: 23,
        contents: [
          { tracked: false, count: 0, content: "func init() " },
          { tracked: true, count: 2, content: " {" },
        ],
      },
      { line: 24, contents: [{ tracked: true, count: 2, content: "" }] },
      {
        line: 25,
        contents: [
          {
            tracked: true,
            count: 2,
            content: "\tlog.SetFormatter(\u0026log.JSONFormatter{})",
          },
        ],
      },
      {
        line: 26,
        contents: [
          { tracked: true, count: 2, content: "\tlog.SetOutput(os.Stdout)" },
        ],
      },
      {
        line: 27,
        contents: [{ tracked: true, count: 2, content: "\tos.Remove(dbConn)" }],
      },
      {
        line: 28,
        contents: [
          {
            tracked: true,
            count: 2,
            content: "\tdb, err := sql.Open(dbDriver, dbConn)",
          },
        ],
      },
      {
        line: 29,
        contents: [
          { tracked: true, count: 2, content: "\tif err != nil " },
          { tracked: true, count: 0, content: " {" },
        ],
      },
      {
        line: 30,
        contents: [
          {
            tracked: true,
            count: 0,
            content: '\t\tlog.WithError(err).Error("Sql open database error")',
          },
        ],
      },
      { line: 31, contents: [{ tracked: true, count: 0, content: "\t}" }] },
      { line: 32, contents: [{ tracked: false, count: 0, content: "" }] },
      {
        line: 33,
        contents: [
          { tracked: false, count: 0, content: "\t" },
          { tracked: true, count: 2, content: "\tdefer db.Close()" },
        ],
      },
      { line: 34, contents: [{ tracked: true, count: 2, content: "" }] },
      {
        line: 35,
        contents: [{ tracked: true, count: 2, content: "\tsqlDdl := `" }],
      },
      {
        line: 36,
        contents: [
          {
            tracked: true,
            count: 2,
            content:
              "\tcreate table users (id integer not null primary key, name text);",
          },
        ],
      },
      {
        line: 37,
        contents: [
          { tracked: true, count: 2, content: "\tdelete from users;" },
        ],
      },
      { line: 38, contents: [{ tracked: true, count: 2, content: "\t`" }] },
      { line: 39, contents: [{ tracked: true, count: 2, content: "" }] },
      {
        line: 40,
        contents: [
          { tracked: true, count: 2, content: "\t_, err = db.Exec(sqlDdl)" },
        ],
      },
      {
        line: 41,
        contents: [
          { tracked: true, count: 2, content: "\tif err != nil " },
          { tracked: true, count: 0, content: " {" },
        ],
      },
      {
        line: 42,
        contents: [
          {
            tracked: true,
            count: 0,
            content: "\t\tlog.WithError(err).Error(sqlDdl)",
          },
        ],
      },
      {
        line: 43,
        contents: [{ tracked: true, count: 0, content: "\t\treturn" }],
      },
      { line: 44, contents: [{ tracked: true, count: 0, content: "\t}" }] },
      { line: 45, contents: [{ tracked: false, count: 0, content: "}" }] },
      { line: 46, contents: [{ tracked: false, count: 0, content: "" }] },
      {
        line: 47,
        contents: [
          { tracked: false, count: 0, content: "func main() " },
          { tracked: true, count: 0, content: " {" },
        ],
      },
      { line: 48, contents: [{ tracked: true, count: 0, content: "" }] },
      {
        line: 49,
        contents: [
          {
            tracked: true,
            count: 0,
            content: "\tlog.SetFormatter(\u0026log.JSONFormatter{})",
          },
        ],
      },
      {
        line: 50,
        contents: [
          {
            tracked: true,
            count: 0,
            content: '\tlog.Info("Starting backend")',
          },
        ],
      },
      { line: 51, contents: [{ tracked: true, count: 0, content: "" }] },
      {
        line: 52,
        contents: [
          {
            tracked: true,
            count: 0,
            content: '\tif os.Getenv("API_PORT") != "" ',
          },
          { tracked: true, count: 0, content: " {" },
        ],
      },
      {
        line: 53,
        contents: [
          {
            tracked: true,
            count: 0,
            content: '\t\tapiPort = os.Getenv("API_PORT")',
          },
        ],
      },
      { line: 54, contents: [{ tracked: true, count: 0, content: "\t}" }] },
      { line: 55, contents: [{ tracked: false, count: 0, content: "" }] },
      {
        line: 56,
        contents: [
          { tracked: false, count: 0, content: "\t" },
          {
            tracked: true,
            count: 0,
            content: 'if os.Getenv("DB_DRIVER") != "" ',
          },
          { tracked: true, count: 0, content: " {" },
        ],
      },
      {
        line: 57,
        contents: [
          {
            tracked: true,
            count: 0,
            content: '\t\tdbDriver = os.Getenv("DB_DRIVER")',
          },
        ],
      },
      { line: 58, contents: [{ tracked: true, count: 0, content: "\t}" }] },
      { line: 59, contents: [{ tracked: false, count: 0, content: "" }] },
      {
        line: 60,
        contents: [
          { tracked: false, count: 0, content: "\t" },
          {
            tracked: true,
            count: 0,
            content: 'if os.Getenv("DB_CONN") != "" ',
          },
          { tracked: true, count: 0, content: " {" },
        ],
      },
      {
        line: 61,
        contents: [
          {
            tracked: true,
            count: 0,
            content: '\t\tdbConn = os.Getenv("DB_CONN")',
          },
        ],
      },
      { line: 62, contents: [{ tracked: true, count: 0, content: "\t}" }] },
      { line: 63, contents: [{ tracked: false, count: 0, content: "" }] },
      {
        line: 64,
        contents: [
          { tracked: false, count: 0, content: "\t" },
          {
            tracked: true,
            count: 0,
            content: "\tdb := database.Connect(dbDriver, dbConn)",
          },
        ],
      },
      { line: 65, contents: [{ tracked: true, count: 0, content: "" }] },
      {
        line: 66,
        contents: [
          { tracked: true, count: 0, content: "\tsrv := \u0026http.Server{" },
        ],
      },
      {
        line: 67,
        contents: [
          { tracked: true, count: 0, content: '\t\tAddr:    ":" + apiPort,' },
        ],
      },
      {
        line: 68,
        contents: [
          {
            tracked: true,
            count: 0,
            content: "\t\tHandler: routers.Get(db),",
          },
        ],
      },
      { line: 69, contents: [{ tracked: true, count: 0, content: "\t}" }] },
      { line: 70, contents: [{ tracked: true, count: 0, content: "" }] },
      {
        line: 71,
        contents: [
          { tracked: true, count: 0, content: "\tgo func() " },
          { tracked: true, count: 0, content: " {" },
        ],
      },
      {
        line: 72,
        contents: [
          {
            tracked: true,
            count: 0,
            content:
              "\t\tif err := srv.ListenAndServe(); err != nil \u0026\u0026 err != http.ErrServerClosed ",
          },
          { tracked: true, count: 0, content: " {" },
        ],
      },
      {
        line: 73,
        contents: [
          {
            tracked: true,
            count: 0,
            content: '\t\t\tlog.Fatalf("listen: %s\\n", err)',
          },
        ],
      },
      { line: 74, contents: [{ tracked: true, count: 0, content: "\t\t}" }] },
      {
        line: 75,
        contents: [{ tracked: false, count: 0, content: "\t}()" }],
      },
      { line: 76, contents: [{ tracked: false, count: 0, content: "" }] },
      {
        line: 77,
        contents: [
          { tracked: false, count: 0, content: "\t" },
          {
            tracked: true,
            count: 0,
            content: "\tquit := make(chan os.Signal, 1)",
          },
        ],
      },
      {
        line: 78,
        contents: [
          {
            tracked: true,
            count: 0,
            content: "\tsignal.Notify(quit, syscall.SIGINT, syscall.SIGTERM)",
          },
        ],
      },
      {
        line: 79,
        contents: [{ tracked: true, count: 0, content: "\t\u003c-quit" }],
      },
      { line: 80, contents: [{ tracked: true, count: 0, content: "" }] },
      {
        line: 81,
        contents: [
          {
            tracked: true,
            count: 0,
            content: '\tlog.Println("Shutdown Server ...")',
          },
        ],
      },
      { line: 82, contents: [{ tracked: true, count: 0, content: "" }] },
      {
        line: 83,
        contents: [
          {
            tracked: true,
            count: 0,
            content:
              "\tctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)",
          },
        ],
      },
      { line: 84, contents: [{ tracked: true, count: 0, content: "" }] },
      {
        line: 85,
        contents: [{ tracked: true, count: 0, content: "\tdefer cancel()" }],
      },
      {
        line: 86,
        contents: [
          {
            tracked: true,
            count: 0,
            content: "\tif err := srv.Shutdown(ctx); err != nil ",
          },
          { tracked: true, count: 0, content: " {" },
        ],
      },
      {
        line: 87,
        contents: [
          {
            tracked: true,
            count: 0,
            content: '\t\tlog.Fatal("Server Shutdown:", err)',
          },
        ],
      },
      { line: 88, contents: [{ tracked: true, count: 0, content: "\t}" }] },
      { line: 89, contents: [{ tracked: false, count: 0, content: "" }] },
      {
        line: 90,
        contents: [
          { tracked: false, count: 0, content: "\t" },
          {
            tracked: true,
            count: 0,
            content: '\tos.Remove("./database.db")',
          },
        ],
      },
      { line: 91, contents: [{ tracked: true, count: 0, content: "" }] },
      {
        line: 92,
        contents: [
          {
            tracked: true,
            count: 0,
            content: '\tlog.Println("Server exiting")',
          },
        ],
      },
      { line: 93, contents: [{ tracked: false, count: 0, content: "}" }] },
    ],
  },
  "goverage-test-crud/internal/pkg/api/controllers/healthz/index.go": {
    "full-name":
      "goverage-test-crud/internal/pkg/api/controllers/healthz/index.go",
    lines: [
      {
        line: 1,
        contents: [{ tracked: false, count: 0, content: "package healthz" }],
      },
      { line: 2, contents: [{ tracked: false, count: 0, content: "" }] },
      {
        line: 3,
        contents: [{ tracked: false, count: 0, content: "import (" }],
      },
      {
        line: 4,
        contents: [{ tracked: false, count: 0, content: '\t"net/http"' }],
      },
      { line: 5, contents: [{ tracked: false, count: 0, content: "" }] },
      {
        line: 6,
        contents: [
          {
            tracked: false,
            count: 0,
            content: '\tlog "github.com/sirupsen/logrus"',
          },
        ],
      },
      { line: 7, contents: [{ tracked: false, count: 0, content: ")" }] },
      { line: 8, contents: [{ tracked: false, count: 0, content: "" }] },
      {
        line: 9,
        contents: [
          {
            tracked: false,
            count: 0,
            content: "func Index(w http.ResponseWriter, r *http.Request) ",
          },
          { tracked: true, count: 1, content: " {" },
        ],
      },
      {
        line: 10,
        contents: [{ tracked: true, count: 1, content: "\tlog.Info(r)" }],
      },
      {
        line: 11,
        contents: [
          { tracked: true, count: 1, content: "\tw.WriteHeader(200)" },
        ],
      },
      {
        line: 12,
        contents: [
          { tracked: true, count: 1, content: '\tw.Write([]byte("ok"))' },
        ],
      },
      { line: 13, contents: [{ tracked: true, count: 1, content: "}" }] },
    ],
  },
  "goverage-test-crud/internal/pkg/api/controllers/users/create.go": {
    "full-name":
      "goverage-test-crud/internal/pkg/api/controllers/users/create.go",
    lines: [
      {
        line: 1,
        contents: [{ tracked: false, count: 0, content: "package users" }],
      },
      { line: 2, contents: [{ tracked: false, count: 0, content: "" }] },
      {
        line: 3,
        contents: [{ tracked: false, count: 0, content: "import (" }],
      },
      {
        line: 4,
        contents: [{ tracked: false, count: 0, content: '\t"database/sql"' }],
      },
      {
        line: 5,
        contents: [{ tracked: false, count: 0, content: '\t"encoding/json"' }],
      },
      {
        line: 6,
        contents: [{ tracked: false, count: 0, content: '\t"io/ioutil"' }],
      },
      {
        line: 7,
        contents: [{ tracked: false, count: 0, content: '\t"net/http"' }],
      },
      { line: 8, contents: [{ tracked: false, count: 0, content: "" }] },
      {
        line: 9,
        contents: [
          {
            tracked: false,
            count: 0,
            content: '\tlog "github.com/sirupsen/logrus"',
          },
        ],
      },
      { line: 10, contents: [{ tracked: false, count: 0, content: ")" }] },
      { line: 11, contents: [{ tracked: false, count: 0, content: "" }] },
      {
        line: 12,
        contents: [
          { tracked: false, count: 0, content: "// Create a new User" },
        ],
      },
      {
        line: 13,
        contents: [
          {
            tracked: false,
            count: 0,
            content:
              "func Create(w http.ResponseWriter, r *http.Request, db *sql.DB) ",
          },
          { tracked: true, count: 0, content: " {" },
        ],
      },
      { line: 14, contents: [{ tracked: true, count: 0, content: "" }] },
      {
        line: 15,
        contents: [{ tracked: true, count: 0, content: "\tlog.Info(r)" }],
      },
      {
        line: 16,
        contents: [
          { tracked: true, count: 0, content: '\tlog.Info("Creating user")' },
        ],
      },
      { line: 17, contents: [{ tracked: true, count: 0, content: "" }] },
      {
        line: 18,
        contents: [
          {
            tracked: true,
            count: 0,
            content: "\tb, err := ioutil.ReadAll(r.Body)",
          },
        ],
      },
      {
        line: 19,
        contents: [
          { tracked: true, count: 0, content: "\tdefer r.Body.Close()" },
        ],
      },
      { line: 20, contents: [{ tracked: true, count: 0, content: "" }] },
      {
        line: 21,
        contents: [
          { tracked: true, count: 0, content: "\tif err != nil " },
          { tracked: true, count: 0, content: " {" },
        ],
      },
      {
        line: 22,
        contents: [
          {
            tracked: true,
            count: 0,
            content: "\t\thttp.Error(w, err.Error(), 500)",
          },
        ],
      },
      {
        line: 23,
        contents: [{ tracked: true, count: 0, content: "\t\treturn" }],
      },
      { line: 24, contents: [{ tracked: true, count: 0, content: "\t}" }] },
      { line: 25, contents: [{ tracked: false, count: 0, content: "" }] },
      {
        line: 26,
        contents: [
          { tracked: false, count: 0, content: "\t" },
          { tracked: true, count: 0, content: "\tvar u User" },
        ],
      },
      { line: 27, contents: [{ tracked: true, count: 0, content: "" }] },
      {
        line: 28,
        contents: [
          {
            tracked: true,
            count: 0,
            content: "\terr = json.Unmarshal(b, \u0026u)",
          },
        ],
      },
      {
        line: 29,
        contents: [
          { tracked: true, count: 0, content: "\tif err != nil " },
          { tracked: true, count: 0, content: " {" },
        ],
      },
      {
        line: 30,
        contents: [
          {
            tracked: true,
            count: 0,
            content: "\t\thttp.Error(w, err.Error(), 500)",
          },
        ],
      },
      {
        line: 31,
        contents: [{ tracked: true, count: 0, content: "\t\treturn" }],
      },
      { line: 32, contents: [{ tracked: true, count: 0, content: "\t}" }] },
      { line: 33, contents: [{ tracked: false, count: 0, content: "" }] },
      {
        line: 34,
        contents: [
          { tracked: false, count: 0, content: "\t" },
          {
            tracked: true,
            count: 0,
            content: "\ttransaction, err := db.Begin()",
          },
        ],
      },
      {
        line: 35,
        contents: [
          { tracked: true, count: 0, content: "\tif err != nil " },
          { tracked: true, count: 0, content: " {" },
        ],
      },
      {
        line: 36,
        contents: [
          {
            tracked: true,
            count: 0,
            content: '\t\tlog.WithError(err).Error("Database begin error")',
          },
        ],
      },
      { line: 37, contents: [{ tracked: true, count: 0, content: "\t}" }] },
      { line: 38, contents: [{ tracked: false, count: 0, content: "" }] },
      {
        line: 39,
        contents: [
          { tracked: false, count: 0, content: "\t" },
          {
            tracked: true,
            count: 0,
            content:
              '\tstatement := "insert into users (id, name) values ($1, $2)"',
          },
        ],
      },
      {
        line: 40,
        contents: [
          {
            tracked: true,
            count: 0,
            content: "\t_, err = transaction.Exec(statement, u.ID, u.Name)",
          },
        ],
      },
      {
        line: 41,
        contents: [
          { tracked: true, count: 0, content: "\tif err != nil " },
          { tracked: true, count: 0, content: " {" },
        ],
      },
      {
        line: 42,
        contents: [
          {
            tracked: true,
            count: 0,
            content: "\t\tlog.WithError(err).Error(statement)",
          },
        ],
      },
      {
        line: 43,
        contents: [
          {
            tracked: true,
            count: 0,
            content: "\t\thttp.Error(w, err.Error(), 500)",
          },
        ],
      },
      { line: 44, contents: [{ tracked: true, count: 0, content: "\t}" }] },
      {
        line: 45,
        contents: [
          { tracked: false, count: 0, content: "\t" },
          {
            tracked: true,
            count: 0,
            content: "\tlog.Infof(\"Created user '%d'.\", u.ID)",
          },
        ],
      },
      { line: 46, contents: [{ tracked: true, count: 0, content: "" }] },
      {
        line: 47,
        contents: [
          {
            tracked: true,
            count: 0,
            content: "\toutput, err := json.Marshal(u)",
          },
        ],
      },
      {
        line: 48,
        contents: [
          { tracked: true, count: 0, content: "\tif err != nil " },
          { tracked: true, count: 0, content: " {" },
        ],
      },
      {
        line: 49,
        contents: [
          {
            tracked: true,
            count: 0,
            content: "\t\tlog.WithError(err).Error(output)",
          },
        ],
      },
      {
        line: 50,
        contents: [
          {
            tracked: true,
            count: 0,
            content: "\t\thttp.Error(w, err.Error(), 500)",
          },
        ],
      },
      { line: 51, contents: [{ tracked: true, count: 0, content: "\t}" }] },
      {
        line: 52,
        contents: [
          { tracked: false, count: 0, content: "\t" },
          {
            tracked: true,
            count: 0,
            content: '\tw.Header().Set("content-type", "application/json")',
          },
        ],
      },
      {
        line: 53,
        contents: [{ tracked: true, count: 0, content: "\tw.Write(output)" }],
      },
      { line: 54, contents: [{ tracked: true, count: 0, content: "" }] },
      {
        line: 55,
        contents: [
          { tracked: true, count: 0, content: "\ttransaction.Commit()" },
        ],
      },
      { line: 56, contents: [{ tracked: false, count: 0, content: "}" }] },
    ],
  },
  "goverage-test-crud/internal/pkg/api/controllers/users/delete.go": {
    "full-name":
      "goverage-test-crud/internal/pkg/api/controllers/users/delete.go",
    lines: [
      {
        line: 1,
        contents: [{ tracked: false, count: 0, content: "package users" }],
      },
      { line: 2, contents: [{ tracked: false, count: 0, content: "" }] },
      {
        line: 3,
        contents: [{ tracked: false, count: 0, content: "import (" }],
      },
      {
        line: 4,
        contents: [{ tracked: false, count: 0, content: '\t"database/sql"' }],
      },
      {
        line: 5,
        contents: [{ tracked: false, count: 0, content: '\t"net/http"' }],
      },
      {
        line: 6,
        contents: [{ tracked: false, count: 0, content: '\t"strconv"' }],
      },
      { line: 7, contents: [{ tracked: false, count: 0, content: "" }] },
      {
        line: 8,
        contents: [
          {
            tracked: false,
            count: 0,
            content: '\tlog "github.com/sirupsen/logrus"',
          },
        ],
      },
      { line: 9, contents: [{ tracked: false, count: 0, content: "" }] },
      {
        line: 10,
        contents: [
          { tracked: false, count: 0, content: '\t"github.com/gorilla/mux"' },
        ],
      },
      { line: 11, contents: [{ tracked: false, count: 0, content: ")" }] },
      { line: 12, contents: [{ tracked: false, count: 0, content: "" }] },
      {
        line: 13,
        contents: [{ tracked: false, count: 0, content: "//Delete User" }],
      },
      {
        line: 14,
        contents: [
          {
            tracked: false,
            count: 0,
            content:
              "func Delete(w http.ResponseWriter, r *http.Request, db *sql.DB) ",
          },
          { tracked: true, count: 0, content: " {" },
        ],
      },
      { line: 15, contents: [{ tracked: true, count: 0, content: "" }] },
      {
        line: 16,
        contents: [{ tracked: true, count: 0, content: "\tlog.Info(r)" }],
      },
      {
        line: 17,
        contents: [
          { tracked: true, count: 0, content: '\tlog.Info("Deleting user")' },
        ],
      },
      {
        line: 18,
        contents: [
          { tracked: true, count: 0, content: "\tvars := mux.Vars(r)" },
        ],
      },
      {
        line: 19,
        contents: [
          {
            tracked: true,
            count: 0,
            content: '\tid, err := strconv.Atoi(vars["id"])',
          },
        ],
      },
      { line: 20, contents: [{ tracked: true, count: 0, content: "" }] },
      {
        line: 21,
        contents: [
          {
            tracked: true,
            count: 0,
            content: "\ttransaction, err := db.Begin()",
          },
        ],
      },
      {
        line: 22,
        contents: [
          { tracked: true, count: 0, content: "\tif err != nil " },
          { tracked: true, count: 0, content: " {" },
        ],
      },
      {
        line: 23,
        contents: [
          {
            tracked: true,
            count: 0,
            content: '\t\tlog.WithError(err).Error("Database begin error")',
          },
        ],
      },
      { line: 24, contents: [{ tracked: true, count: 0, content: "\t}" }] },
      { line: 25, contents: [{ tracked: false, count: 0, content: "" }] },
      {
        line: 26,
        contents: [
          { tracked: false, count: 0, content: "\t" },
          {
            tracked: true,
            count: 0,
            content: '\tstatement := "delete from users where id = $1"',
          },
        ],
      },
      {
        line: 27,
        contents: [
          {
            tracked: true,
            count: 0,
            content: "\t_, err = transaction.Exec(statement, id)",
          },
        ],
      },
      {
        line: 28,
        contents: [
          { tracked: true, count: 0, content: "\tif err != nil " },
          { tracked: true, count: 0, content: " {" },
        ],
      },
      {
        line: 29,
        contents: [
          {
            tracked: true,
            count: 0,
            content: "\t\tlog.WithError(err).Error(statement)",
          },
        ],
      },
      { line: 30, contents: [{ tracked: true, count: 0, content: "\t}" }] },
      {
        line: 31,
        contents: [
          { tracked: false, count: 0, content: "\t" },
          {
            tracked: true,
            count: 0,
            content: "\tlog.Infof(\"Created user '%d'.\", id)",
          },
        ],
      },
      { line: 32, contents: [{ tracked: true, count: 0, content: "" }] },
      {
        line: 33,
        contents: [
          { tracked: true, count: 0, content: "\ttransaction.Commit()" },
        ],
      },
      { line: 34, contents: [{ tracked: false, count: 0, content: "}" }] },
    ],
  },
  "goverage-test-crud/internal/pkg/api/controllers/users/index.go": {
    "full-name":
      "goverage-test-crud/internal/pkg/api/controllers/users/index.go",
    lines: [
      {
        line: 1,
        contents: [{ tracked: false, count: 0, content: "package users" }],
      },
      { line: 2, contents: [{ tracked: false, count: 0, content: "" }] },
      {
        line: 3,
        contents: [{ tracked: false, count: 0, content: "import (" }],
      },
      {
        line: 4,
        contents: [{ tracked: false, count: 0, content: '\t"database/sql"' }],
      },
      {
        line: 5,
        contents: [{ tracked: false, count: 0, content: '\t"encoding/json"' }],
      },
      {
        line: 6,
        contents: [{ tracked: false, count: 0, content: '\t"net/http"' }],
      },
      {
        line: 7,
        contents: [{ tracked: false, count: 0, content: '\t"strconv"' }],
      },
      { line: 8, contents: [{ tracked: false, count: 0, content: "" }] },
      {
        line: 9,
        contents: [
          { tracked: false, count: 0, content: '\t"github.com/gorilla/mux"' },
        ],
      },
      {
        line: 10,
        contents: [
          {
            tracked: false,
            count: 0,
            content: '\tlog "github.com/sirupsen/logrus"',
          },
        ],
      },
      { line: 11, contents: [{ tracked: false, count: 0, content: ")" }] },
      { line: 12, contents: [{ tracked: false, count: 0, content: "" }] },
      {
        line: 13,
        contents: [
          { tracked: false, count: 0, content: "//IndexByID the user by id" },
        ],
      },
      {
        line: 14,
        contents: [
          {
            tracked: false,
            count: 0,
            content:
              "func IndexByID(w http.ResponseWriter, r *http.Request, db *sql.DB) ",
          },
          { tracked: true, count: 0, content: " {" },
        ],
      },
      {
        line: 15,
        contents: [{ tracked: true, count: 0, content: "\tlog.Info(r)" }],
      },
      {
        line: 16,
        contents: [
          { tracked: true, count: 0, content: "\tvars := mux.Vars(r)" },
        ],
      },
      {
        line: 17,
        contents: [
          {
            tracked: true,
            count: 0,
            content: '\tlog.Info("Getting user by id: " + vars["id"])',
          },
        ],
      },
      { line: 18, contents: [{ tracked: true, count: 0, content: "" }] },
      {
        line: 19,
        contents: [
          {
            tracked: true,
            count: 0,
            content: '\tid, err := strconv.Atoi(vars["id"])',
          },
        ],
      },
      { line: 20, contents: [{ tracked: true, count: 0, content: "" }] },
      {
        line: 21,
        contents: [{ tracked: true, count: 0, content: "\tdb.Begin()" }],
      },
      {
        line: 22,
        contents: [
          { tracked: true, count: 0, content: "\tif err != nil " },
          { tracked: true, count: 0, content: " {" },
        ],
      },
      {
        line: 23,
        contents: [
          {
            tracked: true,
            count: 0,
            content: '\t\tlog.WithError(err).Error("Database begin error")',
          },
        ],
      },
      { line: 24, contents: [{ tracked: true, count: 0, content: "\t}" }] },
      { line: 25, contents: [{ tracked: false, count: 0, content: "" }] },
      {
        line: 26,
        contents: [
          { tracked: false, count: 0, content: "\t" },
          {
            tracked: true,
            count: 0,
            content:
              '\tstatement, err := db.Prepare("select id, name from users where id = ?")',
          },
        ],
      },
      {
        line: 27,
        contents: [
          { tracked: true, count: 0, content: "\tif err != nil " },
          { tracked: true, count: 0, content: " {" },
        ],
      },
      {
        line: 28,
        contents: [
          {
            tracked: true,
            count: 0,
            content: "\t\tlog.WithError(err).Error(statement)",
          },
        ],
      },
      { line: 29, contents: [{ tracked: true, count: 0, content: "\t}" }] },
      { line: 30, contents: [{ tracked: false, count: 0, content: "" }] },
      {
        line: 31,
        contents: [
          { tracked: false, count: 0, content: "\t" },
          { tracked: true, count: 0, content: "\tu := User{}" },
        ],
      },
      {
        line: 32,
        contents: [
          {
            tracked: true,
            count: 0,
            content:
              "\terr = statement.QueryRow(id).Scan(\u0026u.ID, \u0026u.Name)",
          },
        ],
      },
      {
        line: 33,
        contents: [
          { tracked: true, count: 0, content: "\tif err != nil " },
          { tracked: true, count: 0, content: " {" },
        ],
      },
      {
        line: 34,
        contents: [
          {
            tracked: true,
            count: 0,
            content: "\t\tlog.WithError(err).Error(statement)",
          },
        ],
      },
      { line: 35, contents: [{ tracked: true, count: 0, content: "\t}" }] },
      { line: 36, contents: [{ tracked: false, count: 0, content: "" }] },
      {
        line: 37,
        contents: [
          { tracked: false, count: 0, content: "\t" },
          {
            tracked: true,
            count: 0,
            content: "\toutput, err := json.Marshal(u)",
          },
        ],
      },
      {
        line: 38,
        contents: [
          { tracked: true, count: 0, content: "\tif err != nil " },
          { tracked: true, count: 0, content: " {" },
        ],
      },
      {
        line: 39,
        contents: [
          {
            tracked: true,
            count: 0,
            content: "\t\thttp.Error(w, err.Error(), 500)",
          },
        ],
      },
      {
        line: 40,
        contents: [{ tracked: true, count: 0, content: "\t\treturn" }],
      },
      { line: 41, contents: [{ tracked: true, count: 0, content: "\t}" }] },
      {
        line: 42,
        contents: [
          { tracked: false, count: 0, content: "\t" },
          {
            tracked: true,
            count: 0,
            content: '\tw.Header().Set("content-type", "application/json")',
          },
        ],
      },
      {
        line: 43,
        contents: [{ tracked: true, count: 0, content: "\tw.Write(output)" }],
      },
      { line: 44, contents: [{ tracked: false, count: 0, content: "" }] },
      { line: 45, contents: [{ tracked: false, count: 0, content: "}" }] },
      { line: 46, contents: [{ tracked: false, count: 0, content: "" }] },
      {
        line: 47,
        contents: [
          { tracked: false, count: 0, content: "//Index the user by id" },
        ],
      },
      {
        line: 48,
        contents: [
          {
            tracked: false,
            count: 0,
            content:
              "func Index(w http.ResponseWriter, r *http.Request, db *sql.DB) ",
          },
          { tracked: true, count: 1, content: " {" },
        ],
      },
      { line: 49, contents: [{ tracked: true, count: 1, content: "" }] },
      {
        line: 50,
        contents: [{ tracked: true, count: 1, content: "\tlog.Info(r)" }],
      },
      {
        line: 51,
        contents: [
          { tracked: true, count: 1, content: '\tlog.Info("Getting users")' },
        ],
      },
      { line: 52, contents: [{ tracked: true, count: 1, content: "" }] },
      {
        line: 53,
        contents: [
          {
            tracked: true,
            count: 1,
            content: "\tif _, err := db.Begin(); err != nil ",
          },
          { tracked: true, count: 0, content: " {" },
        ],
      },
      {
        line: 54,
        contents: [
          {
            tracked: true,
            count: 0,
            content: '\t\tlog.WithError(err).Error("Database begin error")',
          },
        ],
      },
      { line: 55, contents: [{ tracked: true, count: 0, content: "\t}" }] },
      { line: 56, contents: [{ tracked: false, count: 0, content: "" }] },
      {
        line: 57,
        contents: [
          { tracked: false, count: 0, content: "\t" },
          {
            tracked: true,
            count: 1,
            content:
              '\tstatement, err := db.Prepare("select id, name from users")',
          },
        ],
      },
      { line: 58, contents: [{ tracked: true, count: 1, content: "" }] },
      {
        line: 59,
        contents: [
          { tracked: true, count: 1, content: "\tif err != nil " },
          { tracked: true, count: 0, content: " {" },
        ],
      },
      {
        line: 60,
        contents: [
          {
            tracked: true,
            count: 0,
            content: "\t\tlog.WithError(err).Error(statement)",
          },
        ],
      },
      { line: 61, contents: [{ tracked: true, count: 0, content: "\t}" }] },
      { line: 62, contents: [{ tracked: false, count: 0, content: "" }] },
      {
        line: 63,
        contents: [
          { tracked: false, count: 0, content: "\t" },
          {
            tracked: true,
            count: 1,
            content: "\tuserList := make([]User, 0)",
          },
        ],
      },
      {
        line: 64,
        contents: [
          {
            tracked: true,
            count: 1,
            content: "\trows, err := statement.Query()",
          },
        ],
      },
      { line: 65, contents: [{ tracked: true, count: 1, content: "" }] },
      {
        line: 66,
        contents: [
          { tracked: true, count: 1, content: "\tfor rows.Next() " },
          { tracked: true, count: 0, content: " {" },
        ],
      },
      { line: 67, contents: [{ tracked: true, count: 0, content: "" }] },
      {
        line: 68,
        contents: [{ tracked: true, count: 0, content: "\t\tu := User{}" }],
      },
      { line: 69, contents: [{ tracked: true, count: 0, content: "" }] },
      {
        line: 70,
        contents: [
          {
            tracked: true,
            count: 0,
            content:
              "\t\tif err := rows.Scan(\u0026u.ID, \u0026u.Name); err != nil ",
          },
          { tracked: true, count: 0, content: " {" },
        ],
      },
      {
        line: 71,
        contents: [
          { tracked: true, count: 0, content: "\t\t\tlog.Fatal(err)" },
        ],
      },
      { line: 72, contents: [{ tracked: true, count: 0, content: "\t\t}" }] },
      { line: 73, contents: [{ tracked: false, count: 0, content: "" }] },
      {
        line: 74,
        contents: [
          { tracked: false, count: 0, content: "\t\t" },
          {
            tracked: true,
            count: 0,
            content: "userList = append(userList, u)",
          },
        ],
      },
      { line: 75, contents: [{ tracked: false, count: 0, content: "" }] },
      { line: 76, contents: [{ tracked: false, count: 0, content: "\t}" }] },
      { line: 77, contents: [{ tracked: false, count: 0, content: "" }] },
      {
        line: 78,
        contents: [
          { tracked: false, count: 0, content: "\t" },
          { tracked: true, count: 1, content: "if err != nil " },
          { tracked: true, count: 0, content: " {" },
        ],
      },
      {
        line: 79,
        contents: [
          {
            tracked: true,
            count: 0,
            content: "\t\tlog.WithError(err).Error(statement)",
          },
        ],
      },
      { line: 80, contents: [{ tracked: true, count: 0, content: "\t}" }] },
      { line: 81, contents: [{ tracked: false, count: 0, content: "" }] },
      {
        line: 82,
        contents: [
          { tracked: false, count: 0, content: "\t" },
          {
            tracked: true,
            count: 1,
            content: "\toutput, err := json.Marshal(userList)",
          },
        ],
      },
      { line: 83, contents: [{ tracked: true, count: 1, content: "" }] },
      {
        line: 84,
        contents: [
          { tracked: true, count: 1, content: "\tif err != nil " },
          { tracked: true, count: 0, content: " {" },
        ],
      },
      {
        line: 85,
        contents: [
          {
            tracked: true,
            count: 0,
            content: "\t\thttp.Error(w, err.Error(), 500)",
          },
        ],
      },
      {
        line: 86,
        contents: [{ tracked: true, count: 0, content: "\t\treturn" }],
      },
      { line: 87, contents: [{ tracked: true, count: 0, content: "\t}" }] },
      { line: 88, contents: [{ tracked: false, count: 0, content: "" }] },
      {
        line: 89,
        contents: [
          { tracked: false, count: 0, content: "\t" },
          {
            tracked: true,
            count: 1,
            content: '\tw.Header().Set("content-type", "application/json")',
          },
        ],
      },
      {
        line: 90,
        contents: [{ tracked: true, count: 1, content: "\tw.Write(output)" }],
      },
      { line: 91, contents: [{ tracked: false, count: 0, content: "" }] },
      { line: 92, contents: [{ tracked: false, count: 0, content: "}" }] },
    ],
  },
  "goverage-test-crud/internal/pkg/api/routers/routers.go": {
    "full-name": "goverage-test-crud/internal/pkg/api/routers/routers.go",
    lines: [
      {
        line: 1,
        contents: [{ tracked: false, count: 0, content: "package routers" }],
      },
      { line: 2, contents: [{ tracked: false, count: 0, content: "" }] },
      {
        line: 3,
        contents: [{ tracked: false, count: 0, content: "import (" }],
      },
      {
        line: 4,
        contents: [{ tracked: false, count: 0, content: '\t"database/sql"' }],
      },
      {
        line: 5,
        contents: [{ tracked: false, count: 0, content: '\t"net/http"' }],
      },
      { line: 6, contents: [{ tracked: false, count: 0, content: "" }] },
      {
        line: 7,
        contents: [
          {
            tracked: false,
            count: 0,
            content:
              '\t"goverage-test-crud/internal/pkg/api/controllers/healthz"',
          },
        ],
      },
      {
        line: 8,
        contents: [
          {
            tracked: false,
            count: 0,
            content:
              '\t"goverage-test-crud/internal/pkg/api/controllers/users"',
          },
        ],
      },
      { line: 9, contents: [{ tracked: false, count: 0, content: "" }] },
      {
        line: 10,
        contents: [
          { tracked: false, count: 0, content: '\t"github.com/gorilla/mux"' },
        ],
      },
      { line: 11, contents: [{ tracked: false, count: 0, content: ")" }] },
      { line: 12, contents: [{ tracked: false, count: 0, content: "" }] },
      {
        line: 13,
        contents: [{ tracked: false, count: 0, content: "//Get Routers" }],
      },
      {
        line: 14,
        contents: [
          {
            tracked: false,
            count: 0,
            content: "func Get(db *sql.DB) *mux.Router ",
          },
          { tracked: true, count: 2, content: " {" },
        ],
      },
      { line: 15, contents: [{ tracked: true, count: 2, content: "" }] },
      {
        line: 16,
        contents: [
          { tracked: true, count: 2, content: "\trouter := mux.NewRouter()" },
        ],
      },
      { line: 17, contents: [{ tracked: true, count: 2, content: "" }] },
      {
        line: 18,
        contents: [
          {
            tracked: true,
            count: 2,
            content:
              '\trouter.HandleFunc("/users", injector(users.Index, db)).Methods("GET")',
          },
        ],
      },
      {
        line: 19,
        contents: [
          {
            tracked: true,
            count: 2,
            content:
              '\trouter.HandleFunc("/users/{id:[0-9]+}", injector(users.IndexByID, db)).Methods("GET")',
          },
        ],
      },
      {
        line: 20,
        contents: [
          {
            tracked: true,
            count: 2,
            content:
              '\trouter.HandleFunc("/users", injector(users.Create, db)).Methods("POST")',
          },
        ],
      },
      {
        line: 21,
        contents: [
          {
            tracked: true,
            count: 2,
            content:
              '\trouter.HandleFunc("/users/{id:[0-9]+}", injector(users.Delete, db)).Methods("DELETE")',
          },
        ],
      },
      {
        line: 22,
        contents: [
          {
            tracked: true,
            count: 2,
            content:
              '\trouter.HandleFunc("/healthz", healthz.Index).Methods("GET")',
          },
        ],
      },
      { line: 23, contents: [{ tracked: true, count: 2, content: "" }] },
      {
        line: 24,
        contents: [{ tracked: true, count: 2, content: "\treturn router" }],
      },
      { line: 25, contents: [{ tracked: true, count: 2, content: "" }] },
      { line: 26, contents: [{ tracked: true, count: 2, content: "}" }] },
      { line: 27, contents: [{ tracked: false, count: 0, content: "" }] },
      {
        line: 28,
        contents: [
          {
            tracked: false,
            count: 0,
            content:
              "func injector(f func(w http.ResponseWriter, r *http.Request, db *sql.DB), db *sql.DB) func(w http.ResponseWriter, r *http.Request) ",
          },
          { tracked: true, count: 8, content: " {" },
        ],
      },
      {
        line: 29,
        contents: [
          {
            tracked: true,
            count: 8,
            content: "\treturn func(w http.ResponseWriter, r *http.Request) ",
          },
          { tracked: true, count: 1, content: " {" },
        ],
      },
      {
        line: 30,
        contents: [
          {
            tracked: true,
            count: 1,
            content: "\t\tf(w, r, db)",
          },
        ],
      },
      {
        line: 31,
        contents: [
          {
            tracked: true,
            count: 1,
            content: "\t}",
          },
        ],
      },
      {
        line: 32,
        contents: [
          {
            tracked: false,
            count: 0,
            content: "}",
          },
        ],
      },
    ],
  },
  "goverage-test-crud/pkg/database/connector.go": {
    "full-name": "goverage-test-crud/pkg/database/connector.go",
    lines: [
      {
        line: 1,
        contents: [
          {
            tracked: false,
            count: 0,
            content: "package database",
          },
        ],
      },
      {
        line: 2,
        contents: [
          {
            tracked: false,
            count: 0,
            content: "",
          },
        ],
      },
      {
        line: 3,
        contents: [
          {
            tracked: false,
            count: 0,
            content: "import (",
          },
        ],
      },
      {
        line: 4,
        contents: [
          {
            tracked: false,
            count: 0,
            content: '\t"database/sql"',
          },
        ],
      },
      {
        line: 5,
        contents: [
          {
            tracked: false,
            count: 0,
            content: '\t"os"',
          },
        ],
      },
      {
        line: 6,
        contents: [
          {
            tracked: false,
            count: 0,
            content: ")",
          },
        ],
      },
      {
        line: 7,
        contents: [
          {
            tracked: false,
            count: 0,
            content: "",
          },
        ],
      },
      {
        line: 8,
        contents: [
          { tracked: false, count: 0, content: "var currentDrive string" },
        ],
      },
      {
        line: 9,
        contents: [
          { tracked: false, count: 0, content: "var currentStrConn string" },
        ],
      },
      {
        line: 10,
        contents: [
          { tracked: false, count: 0, content: "var currentDB *sql.DB" },
        ],
      },
      { line: 11, contents: [{ tracked: false, count: 0, content: "" }] },
      {
        line: 12,
        contents: [
          { tracked: false, count: 0, content: "//Connect to database" },
        ],
      },
      {
        line: 13,
        contents: [
          {
            tracked: false,
            count: 0,
            content: "func Connect(drive string, strConn string) *sql.DB ",
          },
          { tracked: true, count: 2, content: " {" },
        ],
      },
      {
        line: 14,
        contents: [{ tracked: true, count: 2, content: "\tvar err error" }],
      },
      { line: 15, contents: [{ tracked: true, count: 2, content: "" }] },
      {
        line: 16,
        contents: [
          { tracked: true, count: 2, content: "\tcurrentDrive = drive" },
        ],
      },
      {
        line: 17,
        contents: [
          { tracked: true, count: 2, content: "\tcurrentStrConn = strConn" },
        ],
      },
      { line: 18, contents: [{ tracked: true, count: 2, content: "" }] },
      {
        line: 19,
        contents: [
          {
            tracked: true,
            count: 2,
            content:
              "\tif currentDB, err = sql.Open(drive, strConn); err != nil ",
          },
          { tracked: true, count: 0, content: " {" },
        ],
      },
      {
        line: 20,
        contents: [{ tracked: true, count: 0, content: "\t\tpanic(err)" }],
      },
      { line: 21, contents: [{ tracked: false, count: 0, content: "\t}" }] },
      { line: 22, contents: [{ tracked: false, count: 0, content: "" }] },
      {
        line: 23,
        contents: [
          { tracked: false, count: 0, content: "\t" },
          { tracked: true, count: 2, content: "return currentDB" },
        ],
      },
      { line: 24, contents: [{ tracked: false, count: 0, content: "" }] },
      { line: 25, contents: [{ tracked: false, count: 0, content: "}" }] },
      { line: 26, contents: [{ tracked: false, count: 0, content: "" }] },
      {
        line: 27,
        contents: [
          { tracked: false, count: 0, content: "func Close() " },
          { tracked: true, count: 0, content: " {" },
        ],
      },
      {
        line: 28,
        contents: [
          {
            tracked: true,
            count: 0,
            content: "\tif err := currentDB.Close(); err != nil ",
          },
          { tracked: true, count: 0, content: " {" },
        ],
      },
      {
        line: 29,
        contents: [{ tracked: true, count: 0, content: "\t\tpanic(err)" }],
      },
      { line: 30, contents: [{ tracked: false, count: 0, content: "\t}" }] },
      { line: 31, contents: [{ tracked: false, count: 0, content: "}" }] },
      { line: 32, contents: [{ tracked: false, count: 0, content: "" }] },
      {
        line: 33,
        contents: [
          { tracked: false, count: 0, content: "func Remove() " },
          { tracked: true, count: 2, content: " {" },
        ],
      },
      {
        line: 34,
        contents: [
          { tracked: true, count: 2, content: "\tos.Remove(currentStrConn)" },
        ],
      },
      { line: 35, contents: [{ tracked: true, count: 2, content: "}" }] },
    ],
  },
};
