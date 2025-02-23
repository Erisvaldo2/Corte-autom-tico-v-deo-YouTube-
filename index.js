
import { useState } from 'react';
import { Card, CardContent, Button, Input } from '@/components/ui';

const VideoCutter = () => {
    const [link, setLink] = useState('');
    const [status, setStatus] = useState('');

    const handleCutVideo = async () => {
        if (!link) {
            setStatus('Insira um link válido do YouTube.');
            return;
        }
        setStatus('Processando...');
        // Simulação do corte automático (a lógica real precisaria de uma API de corte de vídeos)
        setTimeout(() => {
            setStatus('Corte concluído! Faça o download do seu vídeo.');
        }, 2000);
    };

    return (
        <div className="p-4 flex flex-col items-center">
            <Card className="w-full max-w-md">
                <CardContent className="flex flex-col gap-4">
                    <h1 className="text-xl font-bold">Corte Automático de Vídeos do YouTube</h1>
                    <Input 
                        placeholder="Cole o link do vídeo do YouTube aqui"
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                    />
                    <Button onClick={handleCutVideo} className="bg-blue-500 hover:bg-blue-600">
                        Fazer Corte Automático
                    </Button>
                    {status && <p className="text-sm text-gray-700">{status}</p>}
                </CardContent>
            </Card>
        </div>
    );
};

export default VideoCutter;
