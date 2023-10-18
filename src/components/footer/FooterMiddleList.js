import React from "react";

function FooterMiddleList({ key, title, listItem }) {
  return (
    <div>
      <h3 className="font-titleFont text-white text-base font-semibold mb-3">
        Get to Know Us
      </h3>
      <ul className="flex flex-col gap-2 font-bodyFont">
        {listItem.map((item) =>
          item.listData.map((data, i) => <li className="footerLink">{data}</li>)
        )}
      </ul>
    </div>
  );
}

export default FooterMiddleList;
