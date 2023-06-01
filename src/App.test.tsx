/* eslint-disable testing-library/no-unnecessary-act */
import { act, fireEvent, render, screen } from '@testing-library/react';
import App from './App';

jest.spyOn(window, 'alert').mockImplementation(() => {});

describe('page', () => {
  const renderComponent = () => render(<App />)
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    renderComponent()
  })

  it('should add new form', () => {
    const addButton = screen.getByText('Tambah mahasiswa')
    act(() => {
      addButton.click()
    })
    const forms = screen.getAllByTestId('scoring-form')
    expect(forms.length).toBe(2)
  })

  it('should remove form', () => {
    const addButton = screen.getByText('Tambah mahasiswa')
    act(() => {
      addButton.click()
    })
    const forms = screen.getAllByTestId('scoring-form')
    expect(forms.length).toBe(2)
    const removeButton = screen.getAllByText('Remove')[0]
    act(() => {
      removeButton.click()
    })
    expect(screen.getAllByTestId('scoring-form').length).toBe(1)
  })

  it('should change the values', () => {
    const firstInput = screen.getByTestId('aspek_penilaian_1-dropdown') as HTMLSelectElement
    const secondInput = screen.getByTestId('aspek_penilaian_2-dropdown') as HTMLSelectElement
    const thirdInput = screen.getByTestId('aspek_penilaian_3-dropdown') as HTMLSelectElement
    const fourthInput = screen.getByTestId('aspek_penilaian_4-dropdown') as HTMLSelectElement

    act(() => {
      fireEvent.change(firstInput, { target: { value: '8' } })
    })
    act(() => {
      fireEvent.change(secondInput, { target: { value: '7' } })
    })
    act(() => {
      fireEvent.change(thirdInput, { target: { value: '9' } })
    })
    act(() => {
      fireEvent.change(fourthInput, { target: { value: '10' } })
    })

    expect(firstInput.value).toBe('8')
    expect(secondInput.value).toBe('7')
    expect(thirdInput.value).toBe('9')
    expect(fourthInput.value).toBe('10')
  })

  it('should show alert', () => {
    const saveBtn = screen.getByText('Simpan')
    saveBtn.click()
    expect(window.alert).toBeCalledWith("{\"aspek_penilaian_1\":{\"mahasiswa_1\":\"0\"},\"aspek_penilaian_2\":{\"mahasiswa_1\":\"0\"},\"aspek_penilaian_3\":{\"mahasiswa_1\":\"0\"},\"aspek_penilaian_4\":{\"mahasiswa_1\":\"0\"}}")
  })
})
