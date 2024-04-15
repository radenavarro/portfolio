import {render, screen, fireEvent} from "@testing-library/react";
import {vi} from "vitest";
import {createMemoryRouter, RouterProvider} from "react-router-dom";
import React from "react";
import routes from "../../routesConfig";

describe('Inicio', () => {
  beforeEach(() => {
    const testRouter = createMemoryRouter(routes, {
      initialEntries: ["/"]
    });
    render(<RouterProvider router={testRouter} />)
  })

  afterEach(() => {
    vi.resetAllMocks()
  })

  test('page renders', () => {
    expect(screen.getByText("BIENVENID@")).toBeDefined()
  })

  test('navbar renders', () => {
    const navbar = screen.getByTestId('test-navbar-lite');
    expect(navbar).toBeDefined()
  })

  test('footer renders', () => {
    const footer = screen.getByTestId('test-footer');
    expect(footer).toBeDefined()
  })

  test('route to habilidades works', () => {
    const button = screen.getByTestId('test-link-habilidades');
    fireEvent.click(button);
    expect(screen.getByTestId('test-habilidades')).toBeDefined()
  })

  test('route to proyectos works', () => {
    const button = screen.getByTestId('test-link-proyectos');
    fireEvent.click(button);
    expect(screen.getByTestId('test-proyectos')).toBeDefined()
  })

  test('route to contacto works', () => {
    vi.mock('react-simple-captcha', () => (
      {
        LoadCanvasTemplate: () => {},
        loadCaptchaEnginge: () => {},
        validateCaptcha: () => {}
      }
    ))
    const button = screen.getByTestId('test-link-contacto');
    fireEvent.click(button);
    expect(screen.getByTestId('test-contacto')).toBeDefined()
  })
})
