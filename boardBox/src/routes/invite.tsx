import React, {useMemo, useState} from "react";
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from "../../App";
import {
    Badge,
    Box,
    Button,
    Divider,
    HStack,
    Input,
    ScrollView,
    Text,
    TextArea,
    VStack
} from "native-base";

type Props = NativeStackScreenProps<RootStackParamList, 'invite'>;

type KnowledgeField = {
    key: string;
    label: string;
    placeholder: string;
};

const knowledgeFields: KnowledgeField[] = [
    {key: 'domain', label: 'Domain / is alani', placeholder: 'Orn: e-ticaret, saglik, fintech'},
    {key: 'sourceProjects', label: 'Kaynak projeler', placeholder: 'Incelenecek repo, servis ya da urunleri yazin'},
    {key: 'stakeholders', label: 'Paydaslar', placeholder: 'Task kimin icin acilacak?'},
    {key: 'jiraProject', label: 'Jira project key', placeholder: 'Orn: ARC, OPS'},
    {key: 'doneCriteria', label: 'Basari / teslim kriteri', placeholder: 'Task ne zaman tamamlanmis sayilacak?'},
];

const Invite = ({navigation}: Props) => {
    const [answers, setAnswers] = useState<Record<string, string>>({
        domain: '',
        sourceProjects: '',
        stakeholders: '',
        jiraProject: '',
        doneCriteria: '',
    });
    const [notes, setNotes] = useState('');

    const missingFields = useMemo(
        () => knowledgeFields.filter((field) => !answers[field.key]?.trim()),
        [answers],
    );

    const readinessScore = Math.round(((knowledgeFields.length - missingFields.length) / knowledgeFields.length) * 100);

    const learningActions = useMemo(() => {
        const actions = [
            'Kaynak projelerdeki README, backlog ve son release notlarini tarar.',
            'Benzer taleplerden ortak acceptance criteria kaliplari cikarir.',
            'Kullanici cevaplarini hafiza karti gibi saklayip sonraki tasklarda tekrar kullanir.',
        ];

        if (missingFields.length > 0) {
            actions.push('Eksik alanlar dolmadan Jira task acmadan once netlestirici sorular sorar.');
        }

        return actions;
    }, [missingFields.length]);

    const jiraPreview = useMemo(() => {
        return {
            project: answers.jiraProject || 'PROJECT_KEY',
            summary: answers.domain
                ? `${answers.domain} domaininde analiz taski`
                : 'Domain analizi taski',
            description: [
                answers.sourceProjects ? `Kaynak projeler: ${answers.sourceProjects}` : 'Kaynak projeler henuz belirtilmedi.',
                answers.stakeholders ? `Paydaslar: ${answers.stakeholders}` : 'Paydaslar netlestirilmeli.',
                answers.doneCriteria ? `Done criteria: ${answers.doneCriteria}` : 'Done criteria bekleniyor.',
                notes ? `Ek notlar: ${notes}` : 'Ek not yok.',
            ].join('\n'),
        };
    }, [answers, notes]);

    return (
        <ScrollView flex={1} bg="primary.200">
            <VStack space={4} px={5} py={6}>
                <Box bg="primary.500" p={4} rounded="xl">
                    <Text color="white" fontSize="2xl" bold>
                        Analyst Agent Blueprint
                    </Text>
                    <Text color="white" mt={2}>
                        Domain projelerinden bilgi toplayan, eksik bilgileri kullaniciya soran ve hazir olunca Jira task acan bir analist agent akisi.
                    </Text>
                </Box>

                <HStack justifyContent="space-between" alignItems="center">
                    <VStack>
                        <Text color="white" bold fontSize="lg">Hazirlik skoru</Text>
                        <Text color="white">Agent bilgi seviyesi: %{readinessScore}</Text>
                    </VStack>
                    <Badge colorScheme={missingFields.length === 0 ? 'success' : 'warning'} rounded="full" px={3} py={1}>
                        {missingFields.length === 0 ? 'Jira ready' : `${missingFields.length} eksik alan`}
                    </Badge>
                </HStack>

                <Box bg="white" rounded="xl" p={4}>
                    <Text bold fontSize="lg" color="primary.400" mb={3}>1. Bilgi toplama</Text>
                    <VStack space={3}>
                        {knowledgeFields.map((field) => (
                            <Box key={field.key}>
                                <Text mb={1} color="primary.400">{field.label}</Text>
                                <Input
                                    value={answers[field.key]}
                                    placeholder={field.placeholder}
                                    onChangeText={(value) => setAnswers((prev) => ({...prev, [field.key]: value}))}
                                />
                            </Box>
                        ))}
                        <Box>
                            <Text mb={1} color="primary.400">Ek gozlem / analiz notlari</Text>
                            <TextArea
                                value={notes}
                                onChangeText={setNotes}
                                autoCompleteType={undefined}
                                h={24}
                                placeholder="Agent'in projelerden topladigi bulgular, riskler ve varsayimlar"
                            />
                        </Box>
                    </VStack>
                </Box>

                <Box bg="white" rounded="xl" p={4}>
                    <Text bold fontSize="lg" color="primary.400" mb={3}>2. Bilmedigini sor</Text>
                    <VStack space={2}>
                        {missingFields.length === 0 ? (
                            <Text color="primary.400">Tum kritik alanlar dolu. Agent Jira task acmaya hazir.</Text>
                        ) : (
                            missingFields.map((field, index) => (
                                <Box key={field.key} bg="primary.50" p={3} rounded="lg">
                                    <Text color="primary.400" bold>Eksik soru {index + 1}</Text>
                                    <Text color="primary.400">
                                        {`"${field.label}" net degil. Agent kullaniciya bu alanin task kalitesini nasil etkileyecegini anlatarak soru sormali.`}
                                    </Text>
                                </Box>
                            ))
                        )}
                    </VStack>
                </Box>

                <Box bg="white" rounded="xl" p={4}>
                    <Text bold fontSize="lg" color="primary.400" mb={3}>3. Kendini gelistirme dongusu</Text>
                    <VStack space={3}>
                        {learningActions.map((action) => (
                            <HStack key={action} space={3} alignItems="flex-start">
                                <Text color="primary.200" bold>•</Text>
                                <Text color="primary.400" flexShrink={1}>{action}</Text>
                            </HStack>
                        ))}
                    </VStack>
                </Box>

                <Box bg="white" rounded="xl" p={4}>
                    <Text bold fontSize="lg" color="primary.400" mb={3}>4. Jira task onizleme</Text>
                    <VStack space={2}>
                        <Text color="primary.400"><Text bold>Project:</Text> {jiraPreview.project}</Text>
                        <Text color="primary.400"><Text bold>Summary:</Text> {jiraPreview.summary}</Text>
                        <Divider my={1}/>
                        <Text color="primary.400" bold>Description</Text>
                        <Text color="primary.400">{jiraPreview.description}</Text>
                    </VStack>
                </Box>

                <Button onPress={() => navigation.navigate('landing')}>
                    <Text color="primary.200" fontSize="md">Landing sayfasina don</Text>
                </Button>
            </VStack>
        </ScrollView>
    );
};

export default Invite;
