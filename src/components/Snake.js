import React, { Component, useRef, useEffect, useState } from "react";

import "./snake.css";

export const SnakePart = (props) => {};

export const Snake = (props) => {
  const canvasRef = useRef(null);
  const [ctx, setContext] = useState(null);
  const [time, setTime] = useState(null);
  const [direction, setDirection] = useState("UP");
  const [snake, setSnake] = useState([
    [15, 10],
    [14, 10],
    [13, 10],
  ]);

  const drawSnake = (ctx) => {
    ctx.fillStyle = "green";
    console.log("DRAWN SNAKE " + snake);
    snake.map((part) => {
      console.log("X " + part[0] + " Y " + part[1]);
      ctx.fillRect(part[0] * 30, part[1] * 30, 29, 29);
    });
  };

  const moveSnake = () => {
    if (direction == "RIGHT") {
      setSnake((prev) => {
        let tmp = [...prev];
        console.log("PREVIOUS SNAKE " + tmp);
        const head = tmp[0];
        const newHead = [head[0] + 1, head[1]];
        tmp.pop();
        tmp.unshift(newHead);
        console.log("NEW SNAKE " + tmp);
        return tmp;
      });
    } else if (direction == "LEFT") {
      setSnake((prev) => {
        let tmp = [...prev];
        console.log("PREVIOUS SNAKE " + tmp);
        const head = tmp[0];
        const newHead = [head[0] - 1, head[1]];
        tmp.pop();
        tmp.unshift(newHead);
        console.log("NEW SNAKE " + tmp);
        return tmp;
      });
    } else if (direction == "UP") {
      setSnake((prev) => {
        let tmp = [...prev];
        console.log("PREVIOUS SNAKE " + tmp);
        const head = tmp[0];
        const newHead = [head[0], head[1] - 1];
        tmp.pop();
        tmp.unshift(newHead);
        console.log("NEW SNAKE " + tmp);
        return tmp;
      });
    } else {
      setSnake((prev) => {
        let tmp = [...prev];
        console.log("PREVIOUS SNAKE " + tmp);
        const head = tmp[0];
        const newHead = [head[0], head[1] + 1];
        tmp.pop();
        tmp.unshift(newHead);
        console.log("NEW SNAKE " + tmp);
        return tmp;
      });
    }
  };

  useEffect(() => {
    if (time == null) {
      const interval = setInterval(() => setTime(Date.now), 500);
    } else {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      drawSnake(ctx);
      moveSnake();
    }
  }, [time]);

  return (
    <canvas
      ref={canvasRef}
      className="game-container"
      {...props}
      width="900px"
      height="600px"
    ></canvas>
  );
};

export default Snake;
