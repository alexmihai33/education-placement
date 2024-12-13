import React, { useState } from 'react';
import '../App.css';
import logo from "../assets/logo.png"

type TableRow = {
  id: number;
  [key: string]: string | number;
};

type Tables = {
  [key: string]: TableRow[];
};

const SchoolDashboard: React.FC = () => {
  // State for the current table
  const [currentTable, setCurrentTable] = useState<string>('Table 1');

  // Dummy data for tables
  const tables: Tables = {
    'Table 1': [
      { id: 1, column1: '', column2: '', column3: '', column4: '', column5: '', column6: '', column7: '', column8: '', column9: '' },
      { id: 2, column1: '', column2: '', column3: '', column4: '', column5: '', column6: '', column7: '', column8: '', column9: '' },
      { id: 3, column1: '', column2: '', column3: '', column4: '', column5: '', column6: '', column7: '', column8: '', column9: '' },
      { id: 4, column1: '', column2: '', column3: '', column4: '', column5: '', column6: '', column7: '', column8: '', column9: '' },
      { id: 5, column1: '', column2: '', column3: '', column4: '', column5: '', column6: '', column7: '', column8: '', column9: '' },
      { id: 6, column1: '', column2: '', column3: '', column4: '', column5: '', column6: '', column7: '', column8: '', column9: '' },
      { id: 7, column1: '', column2: '', column3: '', column4: '', column5: '', column6: '', column7: '', column8: '', column9: '' },
      { id: 8, column1: '', column2: '', column3: '', column4: '', column5: '', column6: '', column7: '', column8: '', column9: '' },
      { id: 9, column1: '', column2: '', column3: '', column4: '', column5: '', column6: '', column7: '', column8: '', column9: '' },
    ],
    'Table 2': [
      { id: 1, columnA: '', columnB: '', columnC: '', columnD: '', columnE: '', columnF: '' },
      { id: 2, columnA: '', columnB: '', columnC: '', columnD: '', columnE: '', columnF: '' },
      { id: 3, columnA: '', columnB: '', columnC: '', columnD: '', columnE: '', columnF: '' },
      { id: 4, columnA: '', columnB: '', columnC: '', columnD: '', columnE: '', columnF: '' },
      { id: 5, columnA: '', columnB: '', columnC: '', columnD: '', columnE: '', columnF: '' },
      { id: 6, columnA: '', columnB: '', columnC: '', columnD: '', columnE: '', columnF: '' },
    ],
  };

  // Render rows for the current table
  const renderTableRows = () => {
    return tables[currentTable].map((row, index) => (
      <tr key={index}>
        {Object.keys(row).map((key) => (
          key !== 'id' && (
            <td key={key}>
              <input
                type="text"
                //value={row[key] as string}
                onChange={(e) => {
                  const updatedTable = [...tables[currentTable]];
                  updatedTable[index][key] = e.target.value;
                  tables[currentTable] = updatedTable;
                }}
              />
            </td>
          )
        ))}
      </tr>
    ));
  };

  return (

    
    <div className="container-fluid school-dashboard">

        <div className="text-center mb-5">
          <img className="mb-3 app-logo" src={logo} alt="Logo" width="60" />
          <h1 className="mb-4">School Dashboard</h1>
          <p className="lead">Completati tabelele de incadrare</p>
        </div>
      <div className="row">
        {/* Main Content - Table */}
        <div className="col-md-9">
          <h2 className="mb-4">{currentTable}</h2>
          <table className="table table-bordered">
            <thead>
              <tr>
                {Object.keys(tables[currentTable][0]).map(
                  (key) => key !== 'id' && <th key={key}>{key}</th>
                )}
              </tr>
            </thead>
            <tbody>{renderTableRows()}</tbody>
          </table>
          <div className="d-flex justify-content-end">
            <button className="btn btn-success me-2 mb-4">Submit for Verification</button>
            <button className="btn btn-secondary mb-4">Reset</button>
          </div>
        </div>

        {/* Side Menu */}
        <div className="col-md-3">
          <div className="menu">
            <h4>Switch Table</h4>
            <ul className="list-group">
              {Object.keys(tables).map((table) => (
                <li
                  key={table}
                  className={`list-group-item ${
                    table === currentTable ? 'active' : ''
                  }`}
                  onClick={() => setCurrentTable(table)}
                >
                  {table}
                </li>
              ))}
            </ul>
            <div className="guidelines mt-4">
              <h5>Guidelines</h5>
              <p>
                Completati tabelele de incadrare in invatamantul pre-universitar in conformitate cu legile actuale gasite: 
                 <a href="https://edu.ro/sites/default/files/_fi%C8%99iere/Minister/2023/Legi_educatie_Romania_educata/legi_monitor/Legea_invatamantului_preuniversitar_nr_198.pdf">
                 aici</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolDashboard;
