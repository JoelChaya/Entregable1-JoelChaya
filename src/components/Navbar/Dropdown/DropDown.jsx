import React from "react";

export const DropDown = () => {
  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Productos
      </a>
      <ul className="dropdown-menu">
        <li>
          <a className="dropdown-item" href="#">
            Bazar
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Yerbas
          </a>
        </li>
        <li></li>
        <li>
          <a className="dropdown-item" href="#">
            Probióticos
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Mermeladas
          </a>
        </li>
      </ul>
    </li>
  );
};
