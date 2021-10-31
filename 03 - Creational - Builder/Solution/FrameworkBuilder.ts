import { Framework } from "./Framework";

export class FrameworkBuilder{

    private framework : Framework;

    constructor(){
        this.framework.setName("teste");
        this.framework.setDb("mysql.com");
        this.framework.setDbuser("usr_");
        this.framework.setDbpass("1234");
        this.framework.setDbhost("mysql.com:335");
        this.framework.setTest(false);
        this.framework.setFull(true);
    }

    public getframework() {
        return this.framework;
    }

    public buildCar(){
        //return new Car();
    }

    public buildBike(){
        //return new Bike();
    }
}