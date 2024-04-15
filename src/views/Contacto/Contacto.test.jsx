import {render, screen, fireEvent} from "@testing-library/react";
import {vi} from "vitest";
import {createMemoryRouter, RouterProvider} from "react-router-dom";
import React from "react";
import routes from "../../routesConfig";

describe('Contacto', () => {
  beforeEach(() => {
    const testRouter = createMemoryRouter(routes, {
      initialEntries: ["/contacto"]
    });
    vi.mock('react-simple-captcha', () => (
      {
        LoadCanvasTemplate: () => {},
        loadCaptchaEnginge: () => {},
        validateCaptcha: () => {}
      }
    ))
    render(<RouterProvider router={testRouter} />)
  })

  afterEach(() => {
    vi.resetAllMocks()
  })

  test('page contacto renders', () => {
    expect(screen.getByTestId('test-contacto')).toBeDefined()
  })

  test('route to inicio works', () => {
    const button = screen.getByTestId('test-link-inicio');
    fireEvent.click(button);
    expect(screen.getByText("BIENVENID@")).toBeDefined()
  })

  test('route to proyectos works', () => {
    const button = screen.getByTestId('test-link-proyectos');
    fireEvent.click(button);
    expect(screen.getByTestId('test-proyectos')).toBeDefined()
  })

  test('route to habilidades works', () => {
    const button = screen.getByTestId('test-link-habilidades');
    fireEvent.click(button);
    expect(screen.getByTestId('test-habilidades')).toBeDefined()
  })
})
