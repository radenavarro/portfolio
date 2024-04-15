import {render, screen, fireEvent} from "@testing-library/react";
import {vi} from "vitest";
import {createMemoryRouter, RouterProvider} from "react-router-dom";
import React from "react";
import routes from "../../routesConfig";

describe('Proyectos', () => {
  beforeEach(() => {
    const testRouter = createMemoryRouter(routes, {
      initialEntries: ["/proyectos"]
    });
    render(<RouterProvider router={testRouter} />)
  })

  afterEach(() => {
    vi.resetAllMocks()
  })

  test('page proyectos renders', () => {
    const laboralesH3 = !!screen.getByText("LABORALES")
    const personalesH3 = !!screen.getByText("PERSONALES")
    const allHeadersOk = (laboralesH3 && personalesH3);
    expect(allHeadersOk).toBe(true)
  })

  test('route to inicio works', () => {
    const button = screen.getByTestId('test-link-inicio');
    fireEvent.click(button);
    expect(screen.getByText("BIENVENID@")).toBeDefined()
  })

  test('route to habilidades works', () => {
    const button = screen.getByTestId('test-link-habilidades');
    fireEvent.click(button);
    expect(screen.getByTestId('test-habilidades')).toBeDefined()
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
