/** * 
 * Atlas : Atlas.js
 * 
 * Copyright (c) Helselia Development and Atlas' Authors / Contributors 2020-
 * 
**/

// Consts and Requires
const { Base, fetch, url } = require("../util/base");

// Main source code
class System extends Base {
    
    constructor() {
        super(Base);
        this.name = "SYSTEM";
    }
    
    /**     * Send Ping Request to Server
     * @param Function result 
    **/
    ping(result) {
        fetch(url + `/ping`, {
            method: "GET",
        }).then((res) => res.json()).then((json) => {
            this.sendResult(json);
        });
    }

    /**     * Get API URL
     * @param Function result
    */
    url(result) {
        this.sendResult(json);
    }

    test(result) {
        this.sendResult("jah");
    }

}

// Exports
module.exports = System