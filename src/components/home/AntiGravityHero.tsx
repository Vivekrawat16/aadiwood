"use client";

import { useEffect, useRef } from "react";
import Matter from "matter-js";

export default function AntiGravityHero() {
    const sceneRef = useRef<HTMLDivElement>(null);
    const engineRef = useRef<Matter.Engine | null>(null);
    const renderRef = useRef<Matter.Render | null>(null);
    const runnerRef = useRef<Matter.Runner | null>(null);

    useEffect(() => {
        if (!sceneRef.current) return;

        // Module aliases
        const Engine = Matter.Engine,
            Render = Matter.Render,
            Runner = Matter.Runner,
            Bodies = Matter.Bodies,
            Composite = Matter.Composite,
            Mouse = Matter.Mouse,
            MouseConstraint = Matter.MouseConstraint,
            Events = Matter.Events;

        // Create engine
        const engine = Engine.create();
        engine.world.gravity.y = 0; // Zero gravity
        engine.world.gravity.x = 0;
        engineRef.current = engine;

        // Create renderer
        const render = Render.create({
            element: sceneRef.current,
            engine: engine,
            options: {
                width: sceneRef.current.clientWidth,
                height: 400, // Fixed height for the strip
                background: "#0F0F0F",
                wireframes: false,
                pixelRatio: window.devicePixelRatio,
            },
        });
        renderRef.current = render;

        // Create bodies
        const width = sceneRef.current.clientWidth;
        const height = 400;
        const wallOptions = {
            isStatic: true,
            render: { fillStyle: "transparent" }
        };

        // Walls
        Composite.add(engine.world, [
            Bodies.rectangle(width / 2, -50, width, 100, wallOptions), // Top
            Bodies.rectangle(width / 2, height + 50, width, 100, wallOptions), // Bottom
            Bodies.rectangle(width + 50, height / 2, 100, height, wallOptions), // Right
            Bodies.rectangle(-50, height / 2, 100, height, wallOptions), // Left
        ]);

        // Floating Objects (Abstract shapes representing Camera, Music, Culture)
        const shapes = [];
        const colors = ["#1A4D2E", "#D27D2D", "#FDFBF7", "#A4C639"]; // Forest Green, Clay, Cream, Muted Lime

        for (let i = 0; i < 15; i++) {
            const x = Math.random() * (width - 100) + 50;
            const y = Math.random() * (height - 100) + 50;
            const size = Math.random() * 30 + 20;
            const color = colors[Math.floor(Math.random() * colors.length)];

            let body;
            const randomShape = Math.random();

            if (randomShape < 0.33) {
                body = Bodies.circle(x, y, size, {
                    render: { fillStyle: color },
                    restitution: 0.9,
                    frictionAir: 0.01,
                });
            } else if (randomShape < 0.66) {
                body = Bodies.rectangle(x, y, size * 2, size * 2, {
                    render: { fillStyle: color },
                    restitution: 0.9,
                    frictionAir: 0.01,
                    chamfer: { radius: 10 }
                });
            } else {
                body = Bodies.polygon(x, y, 3, size * 1.5, {
                    render: { fillStyle: color },
                    restitution: 0.9,
                    frictionAir: 0.01,
                });
            }

            // Add initial velocity
            Matter.Body.setVelocity(body, {
                x: (Math.random() - 0.5) * 5,
                y: (Math.random() - 0.5) * 5,
            });

            shapes.push(body);
        }

        Composite.add(engine.world, shapes);

        // Add mouse control
        const mouse = Mouse.create(render.canvas);
        const mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false,
                },
            },
        });

        Composite.add(engine.world, mouseConstraint);

        // Keep the mouse in sync with rendering
        render.mouse = mouse;

        // Run the engine
        Render.run(render);
        const runner = Runner.create();
        runnerRef.current = runner;
        Runner.run(runner, engine);

        // Handle resize
        const handleResize = () => {
            if (!sceneRef.current || !renderRef.current) return;

            const newWidth = sceneRef.current.clientWidth;
            renderRef.current.canvas.width = newWidth;
            renderRef.current.canvas.height = 400;

            // Reposition walls? Ideally yes, but for now just let them be off-screen or recreate.
            // Simple reload for now or just update bounds if we tracked them.
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            Render.stop(render);
            Runner.stop(runner);
            if (render.canvas) {
                render.canvas.remove();
            }
            Composite.clear(engine.world, false);
            Engine.clear(engine);
        };
    }, []);

    return (
        <div className="w-full bg-[#0F0F0F] py-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800/20 via-black to-black pointer-events-none" />

            <div className="container mx-auto px-4 mb-4 text-center relative z-10">
                <h3 className="text-2xl font-display text-white mb-2">INTERACTIVE ZONE</h3>
                <p className="text-gray-400 text-sm">Throw the shapes! Experience zero gravity.</p>
            </div>

            <div
                ref={sceneRef}
                className="w-full h-[400px] border-y border-white/10 relative z-10 cursor-grab active:cursor-grabbing"
            />
        </div>
    );
}
