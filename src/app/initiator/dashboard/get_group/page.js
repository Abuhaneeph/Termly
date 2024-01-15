import './page.css'
export default function Page() {
    return(
        <>
        <div style={{ marginLeft: '30%', overflowY: 'auto', height: '80vh', paddingBottom: '20px' }} id="donorContent">
                  <div className="container">
  <div className="row align-items-center">
    <div className="col-md-6">
      <div className="mb-3">
        <h5 className="card-title">
         Group List <span className="text-muted fw-normal ms-2">(834)</span>
        </h5>
      </div>
    </div>
    
  </div>
  <div className="row">
    <div className="col-lg-12">
      <div className="">
        <div className="table-responsive">
          <table className="table project-list-table table-nowrap align-middle table-borderless">
            <thead>
              <tr>
                <th scope="col" className="ps-4" style={{ width: 50 }}>
                  <div className="form-check font-size-16">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="contacusercheck"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="contacusercheck"
                    />
                  </div>
                </th>
                <th scope="col">Contributor Name</th>
                <th scope="col">Contributor Status</th>
                <th scope="col">Email</th>
                <th scope="col">Status</th>
                <th scope="col" style={{ width: 200 }}>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="ps-4">
                  <div className="form-check font-size-16">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="contacusercheck1"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="contacusercheck1"
                    />
                  </div>
                </th>
                <td>
                  <img
                    src="#"
                    alt=""
                    className="avatar-sm rounded-circle me-2"
                  />
                  <a href="#" className="text-body">
                    Simon Ryles
                  </a>
                </td>
                <td>
                  <span className="badge badge-soft-success mb-0">
                    Full Stack Developer
                  </span>
                </td>
                <td>SimonRyles@minible.com</td>
                <td>125</td>
                <td>
                  <ul className="list-inline mb-0">
                    
                    <li className="list-inline-item">
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Delete"
                        className="px-2 text-danger"
                      >
                        <i className="bx bx-trash-alt font-size-18" />
                      </a>
                    </li>
                  
                  </ul>
                </td>
              </tr>
             
           
            
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <div className="row g-0 align-items-center pb-4">
    <div className="col-sm-6">
      <div>
        <p className="mb-sm-0">Showing 1 to 10 of 57 entries</p>
      </div>
    </div>
    <div className="col-sm-6">
      <div className="float-sm-end">
        <ul className="pagination mb-sm-0">
          <li className="page-item disabled">
            <a href="#" className="page-link">
              <i className="mdi mdi-chevron-left" />
            </a>
          </li>
          <li className="page-item active">
            <a href="#" className="page-link">
              1
            </a>
          </li>
          <li className="page-item">
            <a href="#" className="page-link">
              2
            </a>
          </li>
          <li className="page-item">
            <a href="#" className="page-link">
              3
            </a>
          </li>
          <li className="page-item">
            <a href="#" className="page-link">
              4
            </a>
          </li>
          <li className="page-item">
            <a href="#" className="page-link">
              5
            </a>
          </li>
          <li className="page-item">
            <a href="#" className="page-link">
              <i className="mdi mdi-chevron-right" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</div>
        </>
    )
}