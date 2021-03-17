import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import axios from 'axios';
import '../syles/Test.css';

const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDM5MWUzZjE2NWUxOGQ4ZDY0MzFiN2QiLCJlbWFpbCI6ImFiYmV5dW5pcXVlMkBnbWFpbC5jb20iLCJwYXNzd29yZCI6bnVsbCwiY29uZmlybVBhc3N3b3JkIjoiQWJiZXl1bmlxdWUyQGdtYWlsLmNvbSIsInBob25lTnVtYmVyIjoiMDcwNjkzODgwNjkiLCJmaXJzdE5hbWUiOiJLYXlvZGUiLCJsYXN0TmFtZSI6IkFiaW9kdW4iLCJkYXRlT2ZCaXJ0aCI6eyJkaXNwYXRjaENvbmZpZyI6bnVsbCwiX3RhcmdldEluc3QiOm51bGwsIm5hdGl2ZUV2ZW50IjpudWxsLCJ0eXBlIjpudWxsLCJ0YXJnZXQiOm51bGwsImN1cnJlbnRUYXJnZXQiOm51bGwsImV2ZW50UGhhc2UiOm51bGwsImJ1YmJsZXMiOm51bGwsImNhbmNlbGFibGUiOm51bGwsInRpbWVTdGFtcCI6bnVsbCwiZGVmYXVsdFByZXZlbnRlZCI6bnVsbCwiaXNUcnVzdGVkIjpudWxsLCJfZGlzcGF0Y2hMaXN0ZW5lcnMiOm51bGwsIl9kaXNwYXRjaEluc3RhbmNlcyI6bnVsbH0sInNleCI6Im1hbGUiLCJ0eXBlIjoxLCJpc0FjdGl2ZSI6MCwiaXNWZXJpZmllZCI6dHJ1ZSwiY3JlYXRlZF9hdCI6IjIwMjEtMDItMjZUMTY6MTM6NTEuNjk1WiIsInVwZGF0ZWRfYXQiOiIyMDIxLTAyLTI2VDE2OjEzOjUxLjY5NVoiLCJ0b2tlbiI6bnVsbCwiZW1haWxWZXJmaWNhdGlvbkRhdGUiOiIyMDIxLTAyLTI2VDE2OjE0OjMyLjQ5M1oiLCJpYXQiOjE2MTU5NjQ3MDEsImV4cCI6MTYxNTk2ODMwMX0.ow-wdvRJ0VsmNxcGdJ44YPg9dNUqE181Ywhdr4P7F4c`;

const Test = () => {
  // const [user, setUser] = useState({});
  useEffect(() => {
    const config = {
      headers: {
        'Content-type': 'application/json',
        'x-access-token': token,
      },
    };
    const url = 'https://api.navihealth.ai/api/v2/user_info';
    const fetchData = async () => {
      try {
        const { data } = await axios.get(url, config);
        const resp = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'x-access-token': token,
          },
        });
        const res = await resp.json();
        console.log(res);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="wrapper">
      <div className="showcase-cont">
        <div className="showcase">
          <p>creative agency</p>
          <div className="play-cont">
            <div className="play-icon-cont">
              <FontAwesomeIcon
                icon={faPlay}
                color="white"
                className="play-icon"
              />
            </div>
            <div className="watch">
              <p>watch a video intro</p>
            </div>
          </div>
        </div>
        <div className="first-purple"></div>
      </div>
      <img
        src="https://res.cloudinary.com/kayode/image/upload/v1614515452/Image_1_1X_asgjuo.png"
        alt=""
        className="img-cont"
      />
    </div>
  );
};

export default Test;
