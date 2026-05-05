import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code2, MessageSquare, Users, Video } from "lucide-react";
import JitsiMeetComponent from "@/components/JitsiMeet";
import ChatPanel from "@/components/ChatPanel";

export default function Home() {
  const [activeTab, setActiveTab] = useState("home");
  const [roomName, setRoomName] = useState("");
  const [joinRoomName, setJoinRoomName] = useState("");
  const [currentRoom, setCurrentRoom] = useState<string | null>(null);
  const [userProfile, setUserProfile] = useState({
    name: "Desenvolvedor",
    role: "student",
  });

  // Carregar perfil do localStorage
  useEffect(() => {
    const saved = localStorage.getItem("devconnect_profile");
    if (saved) {
      setUserProfile(JSON.parse(saved));
    }
  }, []);

  const handleCreateRoom = () => {
    if (roomName.trim()) {
      setCurrentRoom(roomName);
      setActiveTab("room");
    }
  };

  const handleJoinRoom = () => {
    if (joinRoomName.trim()) {
      setCurrentRoom(joinRoomName);
      setActiveTab("room");
    }
  };

  const handleLeaveRoom = () => {
    setCurrentRoom(null);
    setActiveTab("home");
  };

  if (currentRoom) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <MentorRoomView
          roomName={currentRoom}
          userProfile={userProfile}
          onLeave={handleLeaveRoom}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <Code2 className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold">DevConnect</h1>
              <p className="text-xs text-muted-foreground">Mentoria para Devs</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-medium">{userProfile.name}</p>
              <p className="text-xs text-muted-foreground capitalize">
                {userProfile.role === "student" ? "Estudante" : "Mentor"}
              </p>
            </div>
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center font-bold">
              {userProfile.name.substring(0, 2).toUpperCase()}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2 mb-8">
            <TabsTrigger value="home">Início</TabsTrigger>
            <TabsTrigger value="profile">Perfil</TabsTrigger>
          </TabsList>

          {/* Home Tab */}
          <TabsContent value="home" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Criar Sala */}
              <Card className="p-6 border border-border bg-card">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Video className="w-5 h-5 text-primary" />
                    <h2 className="text-lg font-semibold">Criar Sala</h2>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Inicie uma nova sessão de mentoria
                  </p>
                  <Input
                    placeholder="Nome da sala (ex: kotlin-avancado)"
                    value={roomName}
                    onChange={(e) => setRoomName(e.target.value)}
                    className="bg-background border-border"
                    onKeyPress={(e) => e.key === "Enter" && handleCreateRoom()}
                  />
                  <Button
                    onClick={handleCreateRoom}
                    className="w-full bg-primary hover:bg-primary/90"
                  >
                    Criar Sala
                  </Button>
                </div>
              </Card>

              {/* Entrar em Sala */}
              <Card className="p-6 border border-border bg-card">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-secondary" />
                    <h2 className="text-lg font-semibold">Entrar em Sala</h2>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Ingresse em uma sala existente
                  </p>
                  <Input
                    placeholder="ID ou nome da sala"
                    value={joinRoomName}
                    onChange={(e) => setJoinRoomName(e.target.value)}
                    className="bg-background border-border"
                    onKeyPress={(e) => e.key === "Enter" && handleJoinRoom()}
                  />
                  <Button
                    onClick={handleJoinRoom}
                    variant="outline"
                    className="w-full"
                  >
                    Entrar
                  </Button>
                </div>
              </Card>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="p-4 border border-border bg-card/50">
                <Code2 className="w-6 h-6 text-primary mb-2" />
                <h3 className="font-semibold text-sm">Chat de Código</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  Compartilhe código com syntax highlighting
                </p>
              </Card>
              <Card className="p-4 border border-border bg-card/50">
                <MessageSquare className="w-6 h-6 text-secondary mb-2" />
                <h3 className="font-semibold text-sm">Mensagens</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  Comunique-se em tempo real
                </p>
              </Card>
              <Card className="p-4 border border-border bg-card/50">
                <Video className="w-6 h-6 text-accent mb-2" />
                <h3 className="font-semibold text-sm">Videoconferência</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  Integração com Jitsi Meet
                </p>
              </Card>
            </div>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile" className="max-w-md">
            <Card className="p-6 border border-border bg-card">
              <div className="space-y-4">
                <h2 className="text-lg font-semibold">Meu Perfil</h2>
                <Input
                  placeholder="Seu nome"
                  defaultValue={userProfile.name}
                  onChange={(e) => {
                    const newProfile = { ...userProfile, name: e.target.value };
                    setUserProfile(newProfile);
                    localStorage.setItem(
                      "devconnect_profile",
                      JSON.stringify(newProfile)
                    );
                  }}
                  className="bg-background border-border"
                />
                <div className="space-y-2">
                  <label className="text-sm font-medium">Você é:</label>
                  <div className="flex gap-2">
                    <Button
                      variant={
                        userProfile.role === "student" ? "default" : "outline"
                      }
                      className="flex-1"
                      onClick={() => {
                        const newProfile = {
                          ...userProfile,
                          role: "student",
                        };
                        setUserProfile(newProfile);
                        localStorage.setItem(
                          "devconnect_profile",
                          JSON.stringify(newProfile)
                        );
                      }}
                    >
                      Estudante
                    </Button>
                    <Button
                      variant={
                        userProfile.role === "mentor" ? "default" : "outline"
                      }
                      className="flex-1"
                      onClick={() => {
                        const newProfile = { ...userProfile, role: "mentor" };
                        setUserProfile(newProfile);
                        localStorage.setItem(
                          "devconnect_profile",
                          JSON.stringify(newProfile)
                        );
                      }}
                    >
                      Mentor
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

interface MentorRoomViewProps {
  roomName: string;
  userProfile: { name: string; role: string };
  onLeave: () => void;
}

function MentorRoomView({
  roomName,
  userProfile,
  onLeave,
}: MentorRoomViewProps) {
  const [chatOpen, setChatOpen] = useState(true);

  return (
    <div className="flex h-screen flex-col">
      {/* Toolbar */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm p-4 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">
            # {roomName}
          </h2>
          <p className="text-xs text-muted-foreground">
            Conectado como: {userProfile.name}
          </p>
        </div>
        <Button variant="outline" onClick={onLeave}>
          Sair da Sala
        </Button>
      </div>

      {/* Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Jitsi Meet */}
        <div className="flex-1 bg-background">
          <JitsiMeetComponent roomName={roomName} displayName={userProfile.name} />
        </div>

        {/* Chat Sidebar */}
        {chatOpen && (
          <div className="w-80 border-l border-border bg-card flex flex-col">
            <ChatPanel roomName={roomName} userName={userProfile.name} />
          </div>
        )}

        {/* Toggle Chat Button */}
        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="absolute bottom-4 right-4 bg-primary hover:bg-primary/90 text-primary-foreground p-3 rounded-lg"
        >
          <MessageSquare className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
