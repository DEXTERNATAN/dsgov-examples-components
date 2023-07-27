import { memo, useEffect, useRef, useState } from "react";

const core = require("@govbr-ds/core/dist/core");

export const Menu = memo(() => {
  const [menuCore, setMenuCore] = useState<any>();
  const brMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    brMenuRef.current && instanciarComponenteSelect();
  }, []);

  const instanciarComponenteSelect = () => {
    const coreMenu = new core.BRMenu("br-menu", brMenuRef.current);
    console.log(brMenuRef.current, coreMenu);

    setMenuCore(coreMenu);
  };

  return (
    <div className="row">
      {/* <div className="col-sm-4 col-lg-3 mb-5">
        <p>Agrupamento por Expansão</p>
        <div className="br-menu push active" ref={brMenuRef}>
          <div className="menu-container position-static">
            <div className="menu-panel h-auto position-static shadow-lg-right">
              <nav className="menu-body">
                <div className="menu-folder">
                  <a className="menu-item" href="javascript: void(0)">
                    <span className="icon">
                      <i className="fas fa-bell" aria-hidden="true"></i>
                    </span>
                    <span className="content">Nível 1</span>
                  </a>
                  <ul>
                    <li>
                      <a className="menu-item" href="javascript: void(0)">
                        <span className="icon">
                          <i className="fas fa-heart" aria-hidden="true"></i>
                        </span>
                        <span className="content">Nível 2</span>
                      </a>
                    </li>
                    <li>
                      <a className="menu-item" href="javascript: void(0)">
                        <span className="icon">
                          <i
                            className="fas fa-address-book"
                            aria-hidden="true"
                          ></i>
                        </span>
                        <span className="content">Nível 2</span>
                      </a>
                      <ul>
                        <li>
                          <a className="menu-item" href="javascript: void(0)">
                            <span className="icon">
                              <i className="fas fa-book" aria-hidden="true"></i>
                            </span>
                            <span className="content">Nível 3</span>
                          </a>
                        </li>
                        <li>
                          <a className="menu-item" href="javascript: void(0)">
                            <span className="icon">
                              <i className="fas fa-tree" aria-hidden="true"></i>
                            </span>
                            <span className="content">Nível 3</span>
                          </a>
                          <ul>
                            <li>
                              <a
                                className="menu-item"
                                href="javascript: void(0)"
                              >
                                <span className="content">Nível 4</span>
                              </a>
                            </li>
                            <li>
                              <a
                                className="menu-item"
                                href="javascript: void(0)"
                              >
                                <span className="content">Nível 4</span>
                              </a>
                            </li>
                            <li>
                              <a
                                className="menu-item"
                                href="javascript: void(0)"
                              >
                                <span className="content">Nível 4</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a className="menu-item" href="javascript: void(0)">
                            <span className="icon">
                              <i className="fas fa-moon" aria-hidden="true"></i>
                            </span>
                            <span className="content">Nível 3</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a className="menu-item" href="javascript: void(0)">
                        <span className="icon">
                          <i className="fas fa-archive" aria-hidden="true"></i>
                        </span>
                        <span className="content">Nível 2</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="menu-folder">
                  <a className="menu-item" href="javascript: void(0)">
                    <span className="icon">
                      <i className="fas fa-bell" aria-hidden="true"></i>
                    </span>
                    <span className="content">Nível 1</span>
                  </a>
                  <ul>
                    <li>
                      <a className="menu-item" href="javascript: void(0)">
                        <span className="icon">
                          <i className="fas fa-heart" aria-hidden="true"></i>
                        </span>
                        <span className="content">Nível 2</span>
                      </a>
                    </li>
                    <li>
                      <a className="menu-item" href="javascript: void(0)">
                        <span className="icon">
                          <i
                            className="fas fa-address-book"
                            aria-hidden="true"
                          ></i>
                        </span>
                        <span className="content">Nível 2</span>
                      </a>
                      <ul>
                        <li>
                          <a className="menu-item" href="javascript: void(0)">
                            <span className="icon">
                              <i className="fas fa-book" aria-hidden="true"></i>
                            </span>
                            <span className="content">Nível 3</span>
                          </a>
                        </li>
                        <li>
                          <a className="menu-item" href="javascript: void(0)">
                            <span className="icon">
                              <i className="fas fa-tree" aria-hidden="true"></i>
                            </span>
                            <span className="content">Nível 3</span>
                          </a>
                          <ul>
                            <li>
                              <a
                                className="menu-item"
                                href="javascript: void(0)"
                              >
                                <span className="content">Nível 4</span>
                              </a>
                            </li>
                            <li>
                              <a
                                className="menu-item"
                                href="javascript: void(0)"
                              >
                                <span className="content">Nível 4</span>
                              </a>
                            </li>
                            <li>
                              <a
                                className="menu-item"
                                href="javascript: void(0)"
                              >
                                <span className="content">Nível 4</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a className="menu-item" href="javascript: void(0)">
                            <span className="icon">
                              <i className="fas fa-moon" aria-hidden="true"></i>
                            </span>
                            <span className="content">Nível 3</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a className="menu-item" href="javascript: void(0)">
                        <span className="icon">
                          <i className="fas fa-archive" aria-hidden="true"></i>
                        </span>
                        <span className="content">Nível 2</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="menu-folder">
                  <a className="menu-item" href="javascript: void(0)">
                    <span className="icon">
                      <i className="fas fa-bell" aria-hidden="true"></i>
                    </span>
                    <span className="content">Nível 1</span>
                  </a>
                  <ul>
                    <li>
                      <a className="menu-item" href="javascript: void(0)">
                        <span className="icon">
                          <i className="fas fa-heart" aria-hidden="true"></i>
                        </span>
                        <span className="content">Nível 2</span>
                      </a>
                    </li>
                    <li>
                      <a className="menu-item" href="javascript: void(0)">
                        <span className="icon">
                          <i
                            className="fas fa-address-book"
                            aria-hidden="true"
                          ></i>
                        </span>
                        <span className="content">Nível 2</span>
                      </a>
                      <ul>
                        <li>
                          <a className="menu-item" href="javascript: void(0)">
                            <span className="icon">
                              <i className="fas fa-book" aria-hidden="true"></i>
                            </span>
                            <span className="content">Nível 3</span>
                          </a>
                        </li>
                        <li>
                          <a className="menu-item" href="javascript: void(0)">
                            <span className="icon">
                              <i className="fas fa-tree" aria-hidden="true"></i>
                            </span>
                            <span className="content">Nível 3</span>
                          </a>
                          <ul>
                            <li>
                              <a
                                className="menu-item"
                                href="javascript: void(0)"
                              >
                                <span className="content">Nível 4</span>
                              </a>
                            </li>
                            <li>
                              <a
                                className="menu-item"
                                href="javascript: void(0)"
                              >
                                <span className="content">Nível 4</span>
                              </a>
                            </li>
                            <li>
                              <a
                                className="menu-item"
                                href="javascript: void(0)"
                              >
                                <span className="content">Nível 4</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a className="menu-item" href="javascript: void(0)">
                            <span className="icon">
                              <i className="fas fa-moon" aria-hidden="true"></i>
                            </span>
                            <span className="content">Nível 3</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a className="menu-item" href="javascript: void(0)">
                        <span className="icon">
                          <i className="fas fa-archive" aria-hidden="true"></i>
                        </span>
                        <span className="content">Nível 2</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <a className="menu-item divider" href="javascript: void(0)">
                  <span className="icon">
                    <i className="fas fa-bell" aria-hidden="true"></i>
                  </span>
                  <span className="content">Item de nível 1</span>
                </a>
                <a className="menu-item divider" href="javascript: void(0)">
                  <span className="icon">
                    <i className="fas fa-bell" aria-hidden="true"></i>
                  </span>
                  <span className="content">Item de nível 1</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div> */}

      <div className="col-sm-4 col-lg-3 mb-5">
        <p>Agrupamento por Rótulos</p>
        <div className="br-menu push active" ref={brMenuRef}>
          <div className="menu-container position-static shadow-lg-right">
            <div className="menu-panel h-auto position-static">
              <nav className="menu-body">
                <div className="menu-folder">
                  <div className="menu-item">
                    <span className="icon">
                      <i className="fas fa-bell" aria-hidden="true"></i>
                    </span>
                    <span className="content">Nível 1</span>
                  </div>
                  <ul>
                    <li>
                      <a className="menu-item" href="javascript: void(0)">
                        <span className="icon">
                          <i className="fas fa-heart" aria-hidden="true"></i>
                        </span>
                        <span className="content">Nível 2</span>
                      </a>
                    </li>
                    <li>
                      <a className="menu-item" href="javascript: void(0)">
                        <span className="icon">
                          <i
                            className="fas fa-address-book"
                            aria-hidden="true"
                          ></i>
                        </span>
                        <span className="content">Nível 2</span>
                      </a>
                      <ul>
                        <li>
                          <a className="menu-item" href="javascript: void(0)">
                            <span className="icon">
                              <i className="fas fa-book" aria-hidden="true"></i>
                            </span>
                            <span className="content">Nível 3</span>
                          </a>
                        </li>
                        <li>
                          <a className="menu-item" href="javascript: void(0)">
                            <span className="icon">
                              <i className="fas fa-tree" aria-hidden="true"></i>
                            </span>
                            <span className="content">Nível 3</span>
                          </a>
                          <ul>
                            <li>
                              <a
                                className="menu-item"
                                href="javascript: void(0)"
                              >
                                <span className="content">Nível 4</span>
                              </a>
                            </li>
                            <li>
                              <a
                                className="menu-item"
                                href="javascript: void(0)"
                              >
                                <span className="content">Nível 4</span>
                              </a>
                            </li>
                            <li>
                              <a
                                className="menu-item"
                                href="javascript: void(0)"
                              >
                                <span className="content">Nível 4</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a className="menu-item" href="javascript: void(0)">
                            <span className="icon">
                              <i className="fas fa-moon" aria-hidden="true"></i>
                            </span>
                            <span className="content">Nível 3</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a className="menu-item" href="javascript: void(0)">
                        <span className="icon">
                          <i className="fas fa-archive" aria-hidden="true"></i>
                        </span>
                        <span className="content">Nível 2</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="menu-folder">
                  <div className="menu-item">
                    <span className="icon">
                      <i className="fas fa-bell" aria-hidden="true"></i>
                    </span>
                    <span className="content">Nível 1</span>
                  </div>
                  <ul>
                    <li>
                      <a className="menu-item" href="javascript: void(0)">
                        <span className="icon">
                          <i className="fas fa-heart" aria-hidden="true"></i>
                        </span>
                        <span className="content">Nível 2</span>
                      </a>
                    </li>
                    <li>
                      <a className="menu-item" href="javascript: void(0)">
                        <span className="icon">
                          <i
                            className="fas fa-address-book"
                            aria-hidden="true"
                          ></i>
                        </span>
                        <span className="content">Nível 2</span>
                      </a>
                      <ul>
                        <li>
                          <a className="menu-item" href="javascript: void(0)">
                            <span className="icon">
                              <i className="fas fa-book" aria-hidden="true"></i>
                            </span>
                            <span className="content">Nível 3</span>
                          </a>
                        </li>
                        <li>
                          <a className="menu-item" href="javascript: void(0)">
                            <span className="icon">
                              <i className="fas fa-tree" aria-hidden="true"></i>
                            </span>
                            <span className="content">Nível 3</span>
                          </a>
                          <ul>
                            <li>
                              <a
                                className="menu-item"
                                href="javascript: void(0)"
                              >
                                <span className="content">Nível 4</span>
                              </a>
                            </li>
                            <li>
                              <a
                                className="menu-item"
                                href="javascript: void(0)"
                              >
                                <span className="content">Nível 4</span>
                              </a>
                            </li>
                            <li>
                              <a
                                className="menu-item"
                                href="javascript: void(0)"
                              >
                                <span className="content">Nível 4</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a className="menu-item" href="javascript: void(0)">
                            <span className="icon">
                              <i className="fas fa-moon" aria-hidden="true"></i>
                            </span>
                            <span className="content">Nível 3</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a className="menu-item" href="javascript: void(0)">
                        <span className="icon">
                          <i className="fas fa-archive" aria-hidden="true"></i>
                        </span>
                        <span className="content">Nível 2</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="menu-folder">
                  <div className="menu-item">
                    <span className="icon">
                      <i className="fas fa-bell" aria-hidden="true"></i>
                    </span>
                    <span className="content">Nível 1</span>
                  </div>
                  <ul>
                    <li>
                      <a className="menu-item" href="javascript: void(0)">
                        <span className="icon">
                          <i className="fas fa-heart" aria-hidden="true"></i>
                        </span>
                        <span className="content">Nível 2</span>
                      </a>
                    </li>
                    <li>
                      <a className="menu-item" href="javascript: void(0)">
                        <span className="icon">
                          <i
                            className="fas fa-address-book"
                            aria-hidden="true"
                          ></i>
                        </span>
                        <span className="content">Nível 2</span>
                      </a>
                      <ul>
                        <li>
                          <a className="menu-item" href="javascript: void(0)">
                            <span className="icon">
                              <i className="fas fa-book" aria-hidden="true"></i>
                            </span>
                            <span className="content">Nível 3</span>
                          </a>
                        </li>
                        <li>
                          <a className="menu-item" href="javascript: void(0)">
                            <span className="icon">
                              <i className="fas fa-tree" aria-hidden="true"></i>
                            </span>
                            <span className="content">Nível 3</span>
                          </a>
                          <ul>
                            <li>
                              <a
                                className="menu-item"
                                href="javascript: void(0)"
                              >
                                <span className="content">Nível 4</span>
                              </a>
                            </li>
                            <li>
                              <a
                                className="menu-item"
                                href="javascript: void(0)"
                              >
                                <span className="content">Nível 4</span>
                              </a>
                            </li>
                            <li>
                              <a
                                className="menu-item"
                                href="javascript: void(0)"
                              >
                                <span className="content">Nível 4</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a className="menu-item" href="javascript: void(0)">
                            <span className="icon">
                              <i className="fas fa-moon" aria-hidden="true"></i>
                            </span>
                            <span className="content">Nível 3</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a className="menu-item" href="javascript: void(0)">
                        <span className="icon">
                          <i className="fas fa-archive" aria-hidden="true"></i>
                        </span>
                        <span className="content">Nível 2</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="col-sm-4 col-lg-3 mb-5">
        <p>Agrupamento por Dividers</p>
        <div className="br-menu push active">
          <div className="menu-container position-static shadow-lg-right">
            <div className="menu-panel h-auto position-static">
              <nav className="menu-body">
                <div className="menu-folder">
                  <ul>
                    <li>
                      <a className="menu-item" href="javascript: void(0)">
                        <span className="icon">
                          <i className="fas fa-heart" aria-hidden="true"></i>
                        </span>
                        <span className="content">Nível 2</span>
                      </a>
                    </li>
                    <li>
                      <a className="menu-item" href="javascript: void(0)">
                        <span className="icon">
                          <i
                            className="fas fa-address-book"
                            aria-hidden="true"
                          ></i>
                        </span>
                        <span className="content">Nível 2</span>
                      </a>
                      <ul>
                        <li>
                          <a className="menu-item" href="javascript: void(0)">
                            <span className="icon">
                              <i className="fas fa-book" aria-hidden="true"></i>
                            </span>
                            <span className="content">Nível 3</span>
                          </a>
                        </li>
                        <li>
                          <a className="menu-item" href="javascript: void(0)">
                            <span className="icon">
                              <i className="fas fa-tree" aria-hidden="true"></i>
                            </span>
                            <span className="content">Nível 3</span>
                          </a>
                          <ul>
                            <li>
                              <a
                                className="menu-item"
                                href="javascript: void(0)"
                              >
                                <span className="content">Nível 4</span>
                              </a>
                            </li>
                            <li>
                              <a
                                className="menu-item"
                                href="javascript: void(0)"
                              >
                                <span className="content">Nível 4</span>
                              </a>
                            </li>
                            <li>
                              <a
                                className="menu-item"
                                href="javascript: void(0)"
                              >
                                <span className="content">Nível 4</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a className="menu-item" href="javascript: void(0)">
                            <span className="icon">
                              <i className="fas fa-moon" aria-hidden="true"></i>
                            </span>
                            <span className="content">Nível 3</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a className="menu-item" href="javascript: void(0)">
                        <span className="icon">
                          <i className="fas fa-archive" aria-hidden="true"></i>
                        </span>
                        <span className="content">Nível 2</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="menu-folder">
                  <ul>
                    <li>
                      <a className="menu-item" href="javascript: void(0)">
                        <span className="icon">
                          <i className="fas fa-heart" aria-hidden="true"></i>
                        </span>
                        <span className="content">Nível 2</span>
                      </a>
                    </li>
                    <li>
                      <a className="menu-item" href="javascript: void(0)">
                        <span className="icon">
                          <i
                            className="fas fa-address-book"
                            aria-hidden="true"
                          ></i>
                        </span>
                        <span className="content">Nível 2</span>
                      </a>
                      <ul>
                        <li>
                          <a className="menu-item" href="javascript: void(0)">
                            <span className="icon">
                              <i className="fas fa-book" aria-hidden="true"></i>
                            </span>
                            <span className="content">Nível 3</span>
                          </a>
                        </li>
                        <li>
                          <a className="menu-item" href="javascript: void(0)">
                            <span className="icon">
                              <i className="fas fa-tree" aria-hidden="true"></i>
                            </span>
                            <span className="content">Nível 3</span>
                          </a>
                          <ul>
                            <li>
                              <a
                                className="menu-item"
                                href="javascript: void(0)"
                              >
                                <span className="content">Nível 4</span>
                              </a>
                            </li>
                            <li>
                              <a
                                className="menu-item"
                                href="javascript: void(0)"
                              >
                                <span className="content">Nível 4</span>
                              </a>
                            </li>
                            <li>
                              <a
                                className="menu-item"
                                href="javascript: void(0)"
                              >
                                <span className="content">Nível 4</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a className="menu-item" href="javascript: void(0)">
                            <span className="icon">
                              <i className="fas fa-moon" aria-hidden="true"></i>
                            </span>
                            <span className="content">Nível 3</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a className="menu-item" href="javascript: void(0)">
                        <span className="icon">
                          <i className="fas fa-archive" aria-hidden="true"></i>
                        </span>
                        <span className="content">Nível 2</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="menu-folder">
                  <ul>
                    <li>
                      <a className="menu-item" href="javascript: void(0)">
                        <span className="icon">
                          <i className="fas fa-heart" aria-hidden="true"></i>
                        </span>
                        <span className="content">Nível 2</span>
                      </a>
                    </li>
                    <li>
                      <a className="menu-item" href="javascript: void(0)">
                        <span className="icon">
                          <i
                            className="fas fa-address-book"
                            aria-hidden="true"
                          ></i>
                        </span>
                        <span className="content">Nível 2</span>
                      </a>
                      <ul>
                        <li>
                          <a className="menu-item" href="javascript: void(0)">
                            <span className="icon">
                              <i className="fas fa-book" aria-hidden="true"></i>
                            </span>
                            <span className="content">Nível 3</span>
                          </a>
                        </li>
                        <li>
                          <a className="menu-item" href="javascript: void(0)">
                            <span className="icon">
                              <i className="fas fa-tree" aria-hidden="true"></i>
                            </span>
                            <span className="content">Nível 3</span>
                          </a>
                          <ul>
                            <li>
                              <a
                                className="menu-item"
                                href="javascript: void(0)"
                              >
                                <span className="content">Nível 4</span>
                              </a>
                            </li>
                            <li>
                              <a
                                className="menu-item"
                                href="javascript: void(0)"
                              >
                                <span className="content">Nível 4</span>
                              </a>
                            </li>
                            <li>
                              <a
                                className="menu-item"
                                href="javascript: void(0)"
                              >
                                <span className="content">Nível 4</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a className="menu-item" href="javascript: void(0)">
                            <span className="icon">
                              <i className="fas fa-moon" aria-hidden="true"></i>
                            </span>
                            <span className="content">Nível 3</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a className="menu-item" href="javascript: void(0)">
                        <span className="icon">
                          <i className="fas fa-archive" aria-hidden="true"></i>
                        </span>
                        <span className="content">Nível 2</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
});
