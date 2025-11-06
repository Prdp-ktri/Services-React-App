// src/data/dummydata.js

let buyers = JSON.parse(localStorage.getItem("buyers")) || [];

const sync = () => {
  localStorage.setItem("buyers", JSON.stringify(buyers));
}; 

const dummydata = {
  addBuyer(buyer) {
    buyers.push(buyer);
    sync();
  },
  getBuyers() {
    return buyers;
  },
  updateBuyer(updatedBuyer) {
    buyers = buyers.map((b) =>
      b.email === updatedBuyer.email ? updatedBuyer : b
    );
    sync();
  },
  deleteBuyer(email) {
    buyers = buyers.filter((b) => b.email !== email);
    sync();
  },
};

export default dummydata;
