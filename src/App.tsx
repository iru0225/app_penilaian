import { useState } from 'react';
import Text from './shared/component/atom/text';
import ScoringForm from './shared/component/organism/scoring-form';
import Button from './shared/component/atom/button';

function App() {
  const [form, setForm] = useState([
    {
      id: 'mahasiswa_1',
      label: 'Mahasiswa 1',
      value: {
        aspek_penilaian_1: '0',
        aspek_penilaian_2: '0',
        aspek_penilaian_3: '0',
        aspek_penilaian_4: '0',
      }
    }
  ])  

  const onChange = (id: string, data: {key: string, value: string} ) => {
    const formData = [...form]
    formData.forEach((item) => {
      if (item.id === id) {
        item.value[data.key] = data.value
      }
      return item
    })
    
    setForm(() => formData)
  }

  const onClick = (key: string, id: string) => {
    if (key === 'remove') {
      setForm((prevState) => {
        return prevState.filter((item) => item.id !== id)
      })
    }

    if (key === 'add') {
      const idx = form.length - 1
      const newObj = {
        id: `mahasiswa_${Number(form[idx].id.split('_')[1]) + 1}`,
        label: `Mahasiswa ${Number(form[idx].id.split('_')[1]) + 1}`,
        value: {
          aspek_penilaian_1: '0',
          aspek_penilaian_2: '0',
          aspek_penilaian_3: '0',
          aspek_penilaian_4: '0',
        }
      }
      setForm((prevState) => [...prevState, {...newObj}])
    }

    if (key === 'save') {
      const payload = {
        aspek_penilaian_1: {},
        aspek_penilaian_2: {},
        aspek_penilaian_3: {},
        aspek_penilaian_4: {},
      }

      Object.keys(payload).forEach((_key) => {
        const formData = [...form]
        formData.forEach((item) => {
          if (item.value[_key]) {
            payload[_key][item.id] = item.value[_key]
          }
        })
      })

      window.alert(JSON.stringify(payload))
    }
  }

  return (
    <div className='w-[84%] mx-auto'>
      <div className='flex justify-center'>
        <Text variant='title'>
          Applikasi Penilaian Mahasiswa
        </Text>
      </div>
      <div className='flex justify-end mb-8'>
        <Button id='add-btn' onClick={() => onClick('add', '')}>
          Tambah mahasiswa
        </Button>
      </div>
      <div className='flex flex-col gap-8'>
      {
        form.map((element) => (
          <ScoringForm
            key={element.id}
            id={element.id}
            label={element.label}
            onChange={onChange}
            onClick={onClick}
            value={element.value}
            hideRemoveButton={form.length === 1}
          />
        ))
      }
      </div>
      <div className='flex justify-end mt-8'>
        <Button id='save-btn' onClick={() => onClick('save', '')}>
          Simpan
        </Button>
      </div>
    </div>
  );
}

export default App;
