


import React, { useRef, useEffect, useState, useContext } from 'react';
import axios from '../../axiosConfig';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { UserContext } from "../ContextAPI/Context";
import { FaUserCircle } from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";

const Answer = () => {
  const [data, setData] = useState([]);
  const [singleData, setSingleData] = useState({});
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const [userData] = useContext(UserContext);
  const navigate = useNavigate();
  const answerDom = useRef();
  const { id } = useParams();

  const handleEvent = async (e) => {
    e.preventDefault();
    const answerValue = answerDom.current.value;
    if (!answerValue) {
      alert('Please enter all required fields.');
      return;
    }
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        `/answers/addanswer/${id}`,
        {
          questionid: id,
          userid: userData.userid,
          answer: answerValue,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMessage('Answer submitted successfully!');
      setTimeout(() => {
        setMessage('');
        navigate('/');
      }, 3000);
      console.log(response.data);
    } catch (error) {
      setError('Failed to submit the answer. Please try again.');
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const token = localStorage.getItem('token');
        const { data } = await axios.get(`/questions/singlequestion/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setSingleData(data.question);
        console.log(data);
      } catch (error) {
        console.error(error);
        setError('Failed to fetch the question. Please try again.');
        localStorage.setItem("token", "");
        navigate("/login");
      }
    };
    fetchQuestion();
  }, [id, navigate]);

  useEffect(() => {
    const fetchAnswers = async () => {
      try {
        const token = localStorage.getItem('token');
        const { data } = await axios.get(`/answers/getanswer/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setData(data.answers);
        console.log(data.answers);
      } catch (error) {
        console.error(error);
        setError('Failed to fetch answers. Please try again.');
      }
    };
    fetchAnswers();
  }, [id]);

  return (
    <div className="answer">
      <div className="mt-14 max-w-[1400px] mx-auto">
        <section className="border-b border-b-gray-400">
          <div className="flex justify-between">
            <h2 className="mb-3 text-3xl">Questions</h2>
            <h2>Welcome to answer page: {userData.username}</h2>
          </div>
          <section id="map">
            {/* Render the fetched question if available */}
            {singleData ? (
              <div key={singleData.id}>
                <div>
                  <div className="md:flex justify-between max-w-[1400px]">
                    <div className="md:flex justify-around">
                      <div className="mr-10">
                        <FaUserCircle size={80} />
                        <p>{userData.username}</p>
                      </div>
                      <div>
                        <div className="text-sm mt-5">{singleData.title}?</div>
                        <div className="text-sm mt-5">{singleData.description}</div>
                      </div>
                    </div>
                  </div>
                  <hr className="text-red-400 my-3" />
                </div>
              </div>
            ) : (
              <p>Loading question...</p>
            )}
          </section>
        </section>

        <section className="mb-5">
          <h2 className="mb-3 py-5 text-3xl border-b border-gray-400 text-center text-blue-900">Answer from the community</h2>
          <div key={id}>
            {/* Render the fetched answers */}
            {data.map((answer) => (
              <div key={answer.keyid}>
                <div className="border-b border-gray-300">
                  <div className="md:flex justify-between max-w-[1400px]">
                    <div className="md:flex justify-around">
                      <div className="mr-10">
                        <FaUserCircle size={80} />
                        <div className="text-sm">{answer.username}</div>
                      </div>
                      <div className="text-sm mt-5">{answer.answer}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* Fallback content if no answers */}
            {data.length === 0 && <p>No answers available.</p>}
          </div>
        </section>

        <section>
          <h2 className="mb-3 text-2xl">Your Answer</h2>
          <form onSubmit={handleEvent}>
            {message && <p className="text-green-600 text-3xl text-center">{message}</p>}
            {error && <p className="text-red-600 text-center">{error}</p>}
            <textarea
              ref={answerDom}
              placeholder="Write your answer here..."
              className="w-full p-3 border border-gray-400 rounded-lg"
              rows="5"
            ></textarea>
            <button
              type="submit"
              className="px-4 py-2 mt-3 text-white bg-blue-500 rounded hover:bg-blue-600"
            >
              Submit Answer
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Answer;
