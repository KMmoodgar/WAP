class Inventory
{
    constructor(pid,pname,pprice,pqty)
    {
        this.pid=pid;
        this.pname=pname;
        this.pprice=pprice;
        this.pqty=pqty;
    }

    InventDetails()
    {
        //Creating div to hold individual prod details
        let prod_details = document.createElement('div');
        prod_details.setAttribute('id','details');

        //Creating div to hold prod properties
        let prod_id = document.createElement('div');
        let prod_price = document.createElement('div');
        let prod_qty = document.createElement('div');
        let prod_name = document.createElement('div');
        let prod_total = document.createElement('div');
        let devider = document.createElement('hr');

        //Refering above div to set values
        prod_id.innerHTML = "Product id: "+this.pid;
        prod_name.innerHTML = "Product name: "+this.pname;
        prod_price.innerHTML = "Product price: "+this.pprice;
        prod_qty.innerHTML = "Product Quantity: "+this.pqty;
        prod_total.innerHTML = "Total amount: "+(this.pprice*this.pqty);

        //Appending Details to div
        document.getElementById('invent').appendChild(prod_details);

        //Appending properties to details div
        document.getElementById('details').appendChild(prod_id);
        document.getElementById('details').appendChild(prod_name);
        document.getElementById('details').appendChild(prod_price);
        document.getElementById('details').appendChild(prod_qty);
        document.getElementById('details').appendChild(prod_total);
        document.getElementById('details').appendChild(devider);
    }
}

function load()
{
    let prod1 = new Inventory(1,"Phone",15000,10);
    let prod2 = new Inventory(2,"Laptop",45000,5);
    let prod3 = new Inventory(3,"TV",20000,13);
    
    prod1.InventDetails()
    prod2.InventDetails()
    prod3.InventDetails()

}