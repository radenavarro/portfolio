import {render, screen, fireEvent} from "@testing-library/react";
import {vi} from "vitest";
import {createMemoryRouter, RouterProvider} from "react-router-dom";
import React from "react";
import routes from "../../routesConfig";

describe('Habilidades', () => {
  beforeEach(() => {
    const testRouter = createMemoryRouter(routes, {
      initialEntries: ["/habilidades"]
    });
    render(<RouterProvider router={testRouter} />)
  })

  afterEach(() => {
    vi.resetAllMocks()
  })

  test('page habilidades renders', () => {
    const frameworksH2 = !!screen.getByText("FRAMEWORKS")
    const lenguajesH2 = !!screen.getByText("LENGUAJES")
    const herramientasH2 = !!screen.getByText("HERRAMIENTAS")
    const allHeadersOk = (frameworksH2 && lenguajesH2 && herramientasH2);
    expect(allHeadersOk).toBe(true)
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
