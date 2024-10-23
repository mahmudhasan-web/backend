"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const routes_1 = __importDefault(require("./routes"));
const port = 5000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: ['http://localhost:5173'],
    credentials: true
}));
function Run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose_1.default.connect(`mongodb+srv://Christianism:Giw9VUvemSSgTyrc@cluster0.vhkuyua.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
            console.log('Database connect with mongoose');
            app.get('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
                res.send({
                    message: "Christianism server is running"
                });
            }));
            app.use('/', routes_1.default);
        }
        catch (error) {
            console.log(error);
        }
    });
}
Run();
app.listen(port, () => {
    console.log(`Server is running at ${5000}`);
});
