
export class Framework{

    //assistant
    private name : string;
    private db : string;
    private dbuser : string;
    private dbpass : string;
    private dbhost : string;
    private bTest : boolean;
    private full : boolean;

    /*constructor(name: string, db: string, dbuser : string, dbpass: string, dbhost: string, bTest : boolean, full : boolean){
        this.name = name;
        this.db = db;
        this.dbuser = dbuser;
        this.dbpass = dbpass;
        this.dbhost = dbhost;
        this.bTest = bTest;
        this.full = full;
    }*/

    setName(name:string) {
        this.name = name;
    }
    setDb(db:string) {
        this.db = db;
    }
    setDbuser(dbuser:string) {
        this.dbuser = dbuser;
    }
    setDbpass(dbpass:string) {
        this.dbpass = dbpass;
    }
    setDbhost(dbhost:string) {
        this.dbhost = dbhost;
    }
    setTest(bTest:boolean) {
        this.bTest = bTest;
    }
    setFull(full:boolean) {
        this.full = full;
    }
}