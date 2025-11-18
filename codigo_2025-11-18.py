import random
import time

adjectives = ["antigas", "profundas", "misteriosas", "sagradas", "esquecidas", "terríveis", "velhas"]
nouns = ["profecias", "lendas", "escrituras", "runas", "tabuinhas", "cartas", "estrofes"]
verbs_present = ["falam", "sussurram", "revelam", "contam", "mencionam", "anunciam", "preveem"]
verbs_future = ["precederá", "anunciará", "trará", "iniciará", "desencadeará", "culminará em"]
outcomes = [
    "uma jornada inesperada!",
    "o despertar de um poder oculto!",
    "a chegada de um mensageiro!",
    "uma verdade chocante!",
    "a revelação de um grande segredo!",
    "a hora do lanche!",
    "um cafezinho merecido!",
    "uma soneca reparadora!"
]

print("Apresente sua verdade, um pensamento ou uma dúvida, e eu revelarei o que o futuro aguarda...")
time.sleep(0.5)
user_statement = input("> ")

print("\nAnalisando os ecos do tempo e os orbes cósmicos...")
time.sleep(2)

adj = random.choice(adjectives)
noun = random.choice(nouns)
verb_p = random.choice(verbs_present)
verb_f = random.choice(verbs_future)
outcome = random.choice(outcomes)

print(f"\nAh, sim! As {adj} {noun} {verb_p} sobre tal coisa! '{user_statement}'...\n")
time.sleep(1.5)
print(f"Isto {verb_f} {outcome}")