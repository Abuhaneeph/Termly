
import './page.css'
import NavWrapper from '../component/NavWrapper'
export default function Page(){
    return(
        <>
<div id="wrapper">
<NavWrapper/>

      <div id="page-wrapper">
        <div id="page-inner">
         <div className="container-xl px-4 mt-4">
  {/* Account page navigation*/}
  <nav className="nav nav-borders">
  
    <a
      className="nav-link active"
      href="#"
      target="__blank"
    >
      Notifications
    </a>
  </nav>
  <hr className="mt-0 mb-4" />
  <div className="row">
    <div className="col-lg-8">
      {/* Email notifications preferences card*/}
      <div className="card card-header-actions mb-4">
        <div className="card-header">
          Email Notifications
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              id="flexSwitchCheckChecked"
              type="checkbox"
              defaultChecked=""
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckChecked"
            />
          </div>
        </div>
        <div className="card-body">
          <form>
            {/* Form Group (default email)*/}
            <div className="mb-3">
              <label className="small mb-1" htmlFor="inputNotificationEmail">
                Default notification email
              </label>
              <input
                className="form-control"
                id="inputNotificationEmail"
                type="email"
                defaultValue="name@example.com"
                disabled=""
              />
            </div>
            {/* Form Group (email updates checkboxes)*/}
            <div className="mb-0">
              <label className="small mb-2">
                Choose which types of email updates you receive
              </label>
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  id="checkAccountChanges"
                  type="checkbox"
                  defaultChecked=""
                />
                <label
                  className="form-check-label"
                  htmlFor="checkAccountChanges"
                >
                  Changes made to your account
                </label>
              </div>
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  id="checkAccountGroups"
                  type="checkbox"
                  defaultChecked=""
                />
                <label
                  className="form-check-label"
                  htmlFor="checkAccountGroups"
                >
                  Changes are made to groups you&apos;re  part of
                </label>
              </div>
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  id="checkProductUpdates"
                  type="checkbox"
                  defaultChecked=""
                />
                <label
                  className="form-check-label"
                  htmlFor="checkProductUpdates"
                >
                  Product updates for products you&apos;ve purchased or starred
                </label>
              </div>
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  id="checkProductNew"
                  type="checkbox"
                  defaultChecked=""
                />
                <label className="form-check-label" htmlFor="checkProductNew">
                  Information on new products and services
                </label>
              </div>
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  id="checkPromotional"
                  type="checkbox"
                />
                <label className="form-check-label" htmlFor="checkPromotional">
                  Marketing and promotional offers
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  id="checkSecurity"
                  type="checkbox"
                  defaultChecked=""
                  disabled=""
                />
                <label className="form-check-label" htmlFor="checkSecurity">
                  Security alerts
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* SMS push notifications card*/}
      <div className="card card-header-actions mb-4">
        <div className="card-header">
          Push Notifications
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              id="smsToggleSwitch"
              type="checkbox"
              defaultChecked=""
            />
            <label className="form-check-label" htmlFor="smsToggleSwitch" />
          </div>
        </div>
        <div className="card-body">
          <form>
            {/* Form Group (default SMS number)*/}
            <div className="mb-3">
              <label className="small mb-1" htmlFor="inputNotificationSms">
                Default SMS number
              </label>
              <input
                className="form-control"
                id="inputNotificationSms"
                type="tel"
                defaultValue="123-456-7890"
                disabled=""
              />
            </div>
            {/* Form Group (SMS updates checkboxes)*/}
            <div className="mb-0">
              <label className="small mb-2">
                Choose which types of push notifications you receive
              </label>
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  id="checkSmsComment"
                  type="checkbox"
                  defaultChecked=""
                />
                <label className="form-check-label" htmlFor="checkSmsComment">
                  Someone comments on your post
                </label>
              </div>
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  id="checkSmsShare"
                  type="checkbox"
                />
                <label className="form-check-label" htmlFor="checkSmsShare">
                  Someone shares your post
                </label>
              </div>
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  id="checkSmsFollow"
                  type="checkbox"
                  defaultChecked=""
                />
                <label className="form-check-label" htmlFor="checkSmsFollow">
                  A user follows your account
                </label>
              </div>
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  id="checkSmsGroup"
                  type="checkbox"
                />
                <label className="form-check-label" htmlFor="checkSmsGroup">
                  New posts are made in groups you&apos;re part of
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  id="checkSmsPrivateMessage"
                  type="checkbox"
                  defaultChecked=""
                />
                <label
                  className="form-check-label"
                  htmlFor="checkSmsPrivateMessage"
                >
                  You receive a private message
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div className="col-lg-4">
      {/* Notifications preferences card*/}
      <div className="card">
        <div className="card-header">Notification Preferences</div>
        <div className="card-body">
          <form>
            {/* Form Group (notification preference checkboxes)*/}
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                id="checkAutoGroup"
                type="checkbox"
                defaultChecked=""
              />
              <label className="form-check-label" htmlFor="checkAutoGroup">
                Automatically subscribe to group notifications
              </label>
            </div>
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                id="checkAutoProduct"
                type="checkbox"
              />
              <label className="form-check-label" htmlFor="checkAutoProduct">
                Automatically subscribe to new product notifications
              </label>
            </div>
            {/* Submit button*/}
            <button className="btn btn-danger-soft text-danger">
              Unsubscribe from all notifications
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</div>
         </div>
    </>
    )
}