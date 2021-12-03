"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var http_1 = __importDefault(require("http"));
var AASParser_1 = __importDefault(require("./AASParser"));
var app = express_1.default();
var server = http_1.default.createServer(app);
var port = 3001;
var AssetAdministrationShellServer = /** @class */ (function () {
    function AssetAdministrationShellServer() {
        this.parser = new AASParser_1.default();
        server.timeout = 0;
        server.listen(port, function () {
            console.log('Webserver läuft und hört auf Port ' + port);
        });
        app.use('/', function (req, res) {
            console.log(req.originalUrl);
            res.sendStatus(200);
            res.end();
        });
    }
    AssetAdministrationShellServer.prototype.addAAS = function (aas) {
    };
    return AssetAdministrationShellServer;
}());
exports.default = AssetAdministrationShellServer;
//# sourceMappingURL=AssetAdministrationShellServer.js.map