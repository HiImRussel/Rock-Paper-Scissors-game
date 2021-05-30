import "../css/Pick.css";

const Pick = ({ click }) => {
  return (
    <section id="picker-section">
      <h1>Pick one!</h1>
      <div id="pick-boxes">
        <div className="pick-box" onClick={() => click("rock")}>
          <svg
            id="Layer_1"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
          >
            <path d="m404.18 102.99 32.3 154.53-85.3-46.66z" fill="#616d77" />
            <path
              d="m436.48 257.52-16.95 139.68-68.35-186.34z"
              fill="#505c63"
            />
            <path
              d="m351.18 210.86 68.35 186.34-191.36-48.1-50.14-63.85z"
              fill="#798795"
            />
            <path
              d="m419.53 397.2-52.28 85.89-142.66-43.11 3.58-90.88z"
              fill="#616d77"
            />
            <path
              d="m404.18 102.99-53 107.87-57.42-108.24.22-91.62z"
              fill="#8e99a3"
            />
            <path
              d="m367.25 483.09-163.86 17.91-95.05-47.6 116.25-13.42z"
              fill="#505c63"
            />
            <path
              d="m293.76 102.62 57.42 108.24-173.15 74.39 4.43-89.01z"
              fill="#616d77"
            />
            <path d="m293.98 11-.22 91.62-93.18-22.33z" fill="#93a1ad" />
            <path
              d="m293.76 102.62-111.3 93.62-73.82-76.96 91.94-38.99z"
              fill="#798795"
            />
            <path
              d="m178.03 285.25 50.14 63.85-3.58 90.88-116.25 13.42-32.82-118.55z"
              fill="#8e99a3"
            />
            <path
              d="m108.64 119.28 73.82 76.96-4.43 89.01-102.51 49.6z"
              fill="#93a1ad"
            />
            <path
              d="m155.163 447.995-46.823 5.405 95.05 47.6 40.105-4.383z"
              fill="#414a4f"
            />
            <path
              d="m293.98 11-93.4 69.29 40.987 9.822 52.313-37.346z"
              fill="#748089"
            />
            <path
              d="m137.306 149.166-28.666-29.886-33.12 215.57 42.413-20.522z"
              fill="#79848c"
            />
            <path
              d="m241.567 90.112-40.987-9.822-91.94 38.99 28.666 29.886z"
              fill="#5e6a75"
            />
            <path
              d="m75.52 334.85 32.82 118.55 46.823-5.405-37.23-133.667z"
              fill="#747c82"
            />
            <g fill="#f4f8fc">
              <path d="m121.559 177.414a6.078 6.078 0 0 1 -.991-.082 6 6 0 0 1 -4.935-6.9l.6-3.6a6 6 0 0 1 11.838 1.965l-.6 3.6a6 6 0 0 1 -5.912 5.017z" />
              <path d="m107.276 263.452a6.063 6.063 0 0 1 -.989-.082 6 6 0 0 1 -4.936-6.9l11.11-66.928a6 6 0 0 1 11.838 1.964l-11.111 66.929a6 6 0 0 1 -5.912 5.017z" />
            </g>
          </svg>
          <p>Rock</p>
        </div>

        <div className="pick-box" onClick={() => click("paper")}>
          <svg
            id="Layer_1"
            enable-background="new 0 0 512 512"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <g>
                <path
                  d="m40.853 152.795 33.223 1.709c126.231 13.031 253.307 12.532 379.202-1.49 18.466.086 33.562 28.69 33.716 63.887.155 35.197-14.69 63.661-33.156 63.574-126.023-15.201-253.109-16.89-379.231-5.039l-41.052 4.011z"
                  fill="#e9f2ff"
                />
                <path
                  d="m120.053 164.263c.079 18.032-26.718 109.391-26.718 109.391s-52.515 5.826-59.332 5.794c-13.871-.065-30.04-27.852-30.196-63.309-.156-35.457 13.372-64.174 29.631-65.091 13.85-.781 86.615 13.215 86.615 13.215z"
                  fill="#91a8dd"
                />
                <g>
                  <path
                    d="m41.379 188.551c-5.596 0-15.48 5.698-12.579 47.987l48.261 1.193s.872-49.18-35.682-49.18z"
                    fill="#e9f2ff"
                  />
                  <path
                    d="m453.695 280.474c18.53.087 33.427-28.376 33.272-63.574-.045-10.181-1.35-19.802-3.623-28.349h-397.853-44.112s18.967 0 16.995 39.851c-1.761 35.598-18.666 47.874-24.82 51.044l39.597-4.018c126.559-11.848 254.084-10.157 380.544 5.046z"
                    fill="#b5ceff"
                  />
                </g>
                <g>
                  <path
                    d="m474.428 150.915c-126.331 14.02-436.487.223-436.487.223s42.276 3.037 49.001 60.229l421.253 1.971c-1.148-33.498-15.885-62.34-33.767-62.423z"
                    fill="#e9f2ff"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    d="m319.02 492.971v-109.262c25.098-19.054 41.316-49.199 41.316-83.141v-1.353-25.064-16.261-104.58c0-11.409-9.249-20.658-20.658-20.658-11.409 0-20.658 9.249-20.658 20.658 0-11.409-9.249-20.658-20.658-20.658-11.409 0-20.658 9.249-20.658 20.658 0-11.409-9.249-20.658-20.658-20.658-11.409 0-20.658 9.249-20.658 20.658 0-11.409-9.249-20.658-20.658-20.658-11.409 0-20.658 9.249-20.658 20.658v114.905s-23.63.725-43.408 1.527v29.475 1.353c0 34.721 16.975 65.462 43.064 84.428v107.975h124.292z"
                    fill="#ffba47"
                  />
                  <g fill="#f2a82c">
                    <path d="m236.389 145.825c-4.204 0-7.611 3.408-7.611 7.611v82.977c0 4.204 3.408 7.611 7.611 7.611 4.204 0 7.611-3.408 7.611-7.611v-82.977c0-4.204-3.408-7.611-7.611-7.611z" />
                    <path d="m277.704 145.825c-4.204 0-7.612 3.408-7.612 7.611v82.977c0 4.204 3.408 7.611 7.612 7.611s7.612-3.408 7.612-7.611v-82.977c0-4.204-3.408-7.611-7.612-7.611z" />
                    <path d="m319.019 145.825c-4.204 0-7.611 3.408-7.611 7.611v82.977c0 4.204 3.408 7.611 7.611 7.611 4.204 0 7.612-3.408 7.612-7.611v-82.977c0-4.204-3.408-7.611-7.612-7.611z" />
                    <path d="m195.073 261.421c-4.204 0-7.611 3.408-7.611 7.611v25.066c0 4.204 3.408 7.612 7.611 7.612 4.204 0 7.611-3.408 7.611-7.612v-25.066c0-4.203-3.407-7.611-7.611-7.611z" />
                  </g>
                </g>
                <path
                  d="m178.465 408.991h157.304v63.029h-157.304z"
                  fill="#e9f2ff"
                />
                <path
                  d="m285.026 408.991h50.743v54.803h-50.743z"
                  fill="#deebff"
                />
                <path
                  d="m178.465 463.794h157.304v48.206h-157.304z"
                  fill="#f55745"
                />
                <path
                  d="m285.026 463.794h50.743v48.206h-50.743z"
                  fill="#d94e3e"
                />
                <g>
                  <path
                    d="m209.926 445.019c9.795 0 9.811-15.223 0-15.223-9.795 0-9.811 15.223 0 15.223z"
                    fill="#91a8dd"
                  />
                </g>
              </g>
              <g fill="#ffba47">
                <path d="m395.369 64.974c4.204 0 7.611-3.408 7.611-7.611v-13.034c0-4.204-3.408-7.611-7.611-7.611s-7.612 3.408-7.612 7.611v13.034c0 4.203 3.408 7.611 7.612 7.611z" />
                <path d="m395.369 125.821c4.204 0 7.611-3.408 7.611-7.611v-13.034c0-4.204-3.408-7.611-7.611-7.611s-7.612 3.408-7.612 7.611v13.034c0 4.203 3.408 7.611 7.612 7.611z" />
                <path d="m432.309 73.658h-13.034c-4.204 0-7.612 3.408-7.612 7.611s3.408 7.611 7.612 7.611h13.034c4.204 0 7.612-3.408 7.612-7.611s-3.409-7.611-7.612-7.611z" />
                <path d="m371.462 73.658h-13.034c-4.204 0-7.612 3.408-7.612 7.611s3.408 7.611 7.612 7.611h13.034c4.204 0 7.611-3.408 7.611-7.611s-3.407-7.611-7.611-7.611z" />
                <path d="m86.208 339.068c-4.204 0-7.611 3.408-7.611 7.611v13.034c0 4.204 3.408 7.612 7.611 7.612s7.611-3.408 7.611-7.612v-13.034c.001-4.203-3.407-7.611-7.611-7.611z" />
                <path d="m86.208 399.914c-4.204 0-7.611 3.408-7.611 7.611v13.034c0 4.204 3.408 7.611 7.611 7.611s7.611-3.408 7.611-7.611v-13.034c.001-4.203-3.407-7.611-7.611-7.611z" />
                <path d="m123.148 376.008h-13.034c-4.204 0-7.611 3.408-7.611 7.611 0 4.204 3.408 7.612 7.611 7.612h13.034c4.204 0 7.611-3.408 7.611-7.612.001-4.203-3.407-7.611-7.611-7.611z" />
                <path d="m62.302 376.008h-13.034c-4.204 0-7.611 3.408-7.611 7.611 0 4.204 3.408 7.612 7.611 7.612h13.034c4.204 0 7.611-3.408 7.611-7.612 0-4.203-3.408-7.611-7.611-7.611z" />
                <path d="m170.719 0c-4.204 0-7.611 3.408-7.611 7.611v13.034c0 4.204 3.408 7.611 7.611 7.611 4.204 0 7.611-3.408 7.611-7.611v-13.034c.001-4.203-3.407-7.611-7.611-7.611z" />
                <path d="m170.719 60.846c-4.204 0-7.611 3.408-7.611 7.611v13.034c0 4.204 3.408 7.611 7.611 7.611 4.204 0 7.611-3.408 7.611-7.611v-13.033c.001-4.204-3.407-7.612-7.611-7.612z" />
                <path d="m207.659 36.94h-13.033c-4.204 0-7.611 3.408-7.611 7.611s3.408 7.611 7.611 7.611h13.033c4.204 0 7.611-3.408 7.611-7.611s-3.408-7.611-7.611-7.611z" />
                <path d="m146.813 36.94h-13.034c-4.204 0-7.611 3.408-7.611 7.611s3.408 7.611 7.611 7.611h13.034c4.204 0 7.611-3.408 7.611-7.611s-3.408-7.611-7.611-7.611z" />
                <path d="m425.792 392.856c-4.204 0-7.611 3.408-7.611 7.611v13.034c0 4.204 3.408 7.612 7.611 7.612s7.612-3.408 7.612-7.612v-13.034c-.001-4.203-3.408-7.611-7.612-7.611z" />
                <path d="m425.792 453.702c-4.204 0-7.611 3.408-7.611 7.612v13.034c0 4.204 3.408 7.611 7.611 7.611s7.612-3.408 7.612-7.611v-13.034c-.001-4.204-3.408-7.612-7.612-7.612z" />
                <path d="m462.732 429.796h-13.034c-4.204 0-7.611 3.408-7.611 7.612s3.408 7.611 7.611 7.611h13.034c4.204 0 7.612-3.408 7.612-7.611-.001-4.204-3.408-7.612-7.612-7.612z" />
                <path d="m401.886 429.796h-13.034c-4.204 0-7.612 3.408-7.612 7.612s3.408 7.611 7.612 7.611h13.034c4.204 0 7.612-3.408 7.612-7.611-.001-4.204-3.409-7.612-7.612-7.612z" />
              </g>
            </g>
          </svg>
          <p>Paper</p>
        </div>

        <div className="pick-box" onClick={() => click("scissors")}>
          <svg
            id="Layer_1"
            enable-background="new 0 0 497 497"
            viewBox="0 0 497 497"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m248.526 340.278-11.891 16.504-74.387-53.844 216.585-302.912c41.158 29.65 50.481 87.054 20.821 128.205z"
              fill="#d0d0d9"
            />
            <path
              d="m378.833.026-17.058 23.856c20.433 30.919 20.834 72.5-2.122 104.349l-150.013 209.01 26.995 19.54 11.891-16.503 151.128-212.046c29.66-41.152 20.338-98.556-20.821-128.206z"
              fill="#bfbfc7"
            />
            <path
              d="m256.156 350.939 74.529-53.69-213.852-297.223c-41.158 29.65-50.481 87.054-20.821 128.205z"
              fill="#ededf8"
            />
            <path
              d="m116.833.026c-9.182 6.615-16.775 14.613-22.708 23.501l213.29 296.378-48.785 34.475 75.018-53.013z"
              fill="#dadae3"
            />
            <path
              d="m480.08 354.969c-28.505-39.549-83.281-48.966-123.3-21.594l-26.095-36.125-74.529 53.69 69.92 96.927 8.561 11.877c28.941 40.153 84.961 49.248 125.124 20.315s49.26-84.938 20.319-125.09zm-43.208 93.335c-22.512 16.217-53.911 11.119-70.133-11.387-16.221-22.506-11.122-53.896 11.39-70.114 22.512-16.217 53.911-11.119 70.133 11.386s11.122 53.898-11.39 70.115z"
              fill="#fe79a9"
            />
            <path
              d="m480.08 354.969c-21.714-30.127-58.67-42.745-92.737-34.959 20.511 4.682 39.47 16.552 52.737 34.959 8.827 12.247 14.096 25.969 16.044 39.947 2.219 8.544 2.121 17.461-.157 25.839-3.481 22.997-15.841 44.633-36.208 59.304-10.007 7.209-20.998 12.054-32.309 14.649 24.213 5.505 50.58 1.005 72.309-14.649 40.164-28.933 49.262-84.938 20.321-125.09z"
              fill="#f4549b"
            />
            <path
              d="m166.315 297.249-26.095 36.125c-40.019-27.372-94.795-17.955-123.3 21.594-28.941 40.152-19.843 96.157 20.32 125.09s96.183 19.838 125.124-20.315l8.561-11.877 69.92-96.927zm-36.054 139.668c-16.221 22.506-47.621 27.604-70.133 11.387s-27.611-47.608-11.39-70.114 47.621-27.604 70.133-11.386c22.512 16.217 27.611 47.607 11.39 70.113z"
              fill="#fe79a9"
            />
            <path
              d="m213.809 331.463-69.181 95.904-8.561 11.877c-26.286 36.469-74.908 47.311-113.701 27.316 4.356 4.939 9.305 9.487 14.874 13.499 40.163 28.933 96.183 19.838 125.124-20.315l8.561-11.877 69.92-96.927z"
              fill="#f4549b"
            />
            <circle cx="248.5" cy="263.42" fill="#797a84" r="15.328" />
          </svg>
          <p>Scisors</p>
        </div>
      </div>
    </section>
  );
};

export default Pick;
